import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/authContext'
import  {useUpdateDocument} from "../../hooks/useUpdateDocument"
import { useFetchDocument } from '../../hooks/useFetchDocument'

const updateProduct = () => {
    const { user } = useAuthValue();
    const { id } = useParams();
    const { document: product } = useFetchDocument("products", id)

    const [productName, setProductName] = useState('');
    const [productImg, setProductImg] = useState('');
    const [productValue, setProductValue] = useState(0);
    const [productDescription, setProductDescription] = useState('');
    const [formError, setFormError] = useState('');

    useEffect(() => {
        if (product) {
            setProductName(product.productName)
            setProductDescription(product.productDescription)
            setProductValue(product.productValue)
            setProductImg(product.productImg)
        }
    },[product])

    const { updateDocument, response } = useUpdateDocument("products");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        //validate image URL
        try {

            new URL(productImg);

        } catch (error) {
            setFormError("a imagem precisa ser uma URL.")
            setProductImg("")
            return formError, productImg;

        }

        //validate datas from html
        if (!productName || !productImg || !productValue || !productDescription) {
            setFormError("Por favor, preencha todos os campos!")
            return formError;
        }
        else{
            const data = {
                productName,
                productImg,
                productValue,
                productDescription,
                uid: user.uid,
                createdBy: user.displayName,
            };

            updateDocument(id,data);
            //redirect to dashboard page
            navigate('/dashboard');
         };
    }

  return (
    <div className='flex justify-end flex-col bg-slate-50'>
    <h1></h1>
    <form onSubmit={handleSubmit} className=' brightness-90 bg-createproduct max-w-sm mx-auto p-10'>
        <div className="mb-5 shadow-2-l bg-slate-300 p-4 shadow-sm">
            <div className='text-center flex justify-center '>
                <h1 className='font-bold text-yellow-500 pb-2 shadow-sm bg-slate-300 '>UPDATE YOUR PRODUCT</h1>
            </div>
            <label for="text" className="block mb-2 text-sm font-medium text-white dark:text-white">Product Name:</label>
            <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 mt-2 mb-2 px-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[280px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Name of product..." required />

            <label for="text" className="block mb-2 text-sm font-medium text-white dark:text-white">Value:</label>
            <input type="number" id='value-input'  className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 mt-2 mb-2 px-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[280px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={productValue} onChange={(e) => setProductValue(e.target.value)} placeholder="R$: 99.00" required />

            <label for="text" className="block mb-2 text-sm font-medium text-white dark:text-white">Description:</label>
            <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 mt-2 mb-2 px-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[280px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={productDescription} onChange={(e) => setProductDescription(e.target.value)} placeholder="Description of your product..." required />

            <label for="text" className="block mb-2 text-sm font-medium text-white dark:text-white">Image:</label>
            <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 mt-2 mb-2 px-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[280px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={productImg} onChange={(e) => setProductImg(e.target.value)} placeholder="Put image of your product..." required />
            <div className='text-center'>
               
            </div>
        </div>
        {!response.loading && <button type="submit" className="text-white bg-yellow-500 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Product</button>}
        {response.loading && <button type="submit" disabled className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Aguarde...</button>}
        {response.error && <p className='font-bold text-red-600 bg-slate-100 t-2'>{response.error}</p>}
        {formError && <p className='font-bold text-red-600 bg-slate-100 t-2'>{formError}</p>}

    </form>
</div>
  )
}

export default updateProduct
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument';

const ProductDetails = () => {
  useEffect(() => {window.scrollTo(0, 0)  
  },[]);
  const { id } = useParams();
  const { document: product, loading } = useFetchDocument("products", id)
  return (
    <>
      {loading
        ? (<>
          <p>Carregando...</p>
        </>)
        : (<>
          {product && <div className='flex justify-center mt-40'>
            <div className='flex items-center justify-cente bg-blue-800 shadow-xl p-5'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8Dj9Oj8DUVKsvUtsNnSYg1-9ONsWXMWoOg&s" alt="teste" />
              <div className='font-bold p-2'>
                <h1>POST {id}</h1>
                <h2>{product.productName}</h2>
                <h2>R$: {product.productValue}</h2>
                <p>{product.productDescription}</p>
              </div>
            </div>
          </div>}
        </>)}
    </>

  )
}

export default ProductDetails
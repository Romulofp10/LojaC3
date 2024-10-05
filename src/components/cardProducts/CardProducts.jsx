import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css'

export const CardProducts = (props) => {
    
    
    const handleClickAddCart = () =>{
        props.notifyToast();
        addProductToCart(props.id,props.title,parseFloat(props.value))
        
    }
    const {addProductToCart} = useContext(CartContext);
    return (
        <div key={props.id} className="block  max-w-[185px]  h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-300 ">
            
           <Link to={`/details/${props.id}`}>
           <a href="#">
                <img className="rounded-t-lg hover:scale-110 hover:-rotate-2 duration-300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8Dj9Oj8DUVKsvUtsNnSYg1-9ONsWXMWoOg&s" alt="" />
            </a>
           </Link>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{props.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
               <span className='inline-flex font-normal'>R$:  <p className='font-bold'>{props.value}</p></span>
                <button onClick={handleClickAddCart} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                   Add Carrinho
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>

    )
}

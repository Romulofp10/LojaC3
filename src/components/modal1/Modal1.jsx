import React, { useContext, useState} from 'react'
import './Modal1.css'
import { CartContext } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';

const Modal1 = ({cartIsOpen,setModalOpen}) => {
  const [error,setError] = useState('');
  const navigate  = useNavigate();
  const {productsCart,removeProductToCart,productsCount,productsTotal} = useContext(CartContext);
  const handleClick = ()=>{
    setError('');
    if(productsCart.length  === 0 || undefined){
      return setError("Seu carrinho esta vazio");
    }

    setModalOpen();
    navigate('/cart');
  }
 
  if(cartIsOpen){
    return(
      <div className='bg-black/60 w-full h-full fixed top-0 left-0 z-[99] '>
      <div className="bg-white h-full w-60 flex just" id='modal-cart'>
         <div className='  flex justify-between'>
          <p>Seu carrinho</p>
          <button onClick={setModalOpen}>Fechar</button>
         </div>
          <div className="mt-5 item-cart bg-slate-200">
            {productsCart ? 
            (productsCart.map((product)=><>
             <div className='flex items-center bg-slate-100 justify-between my-2'>
              <img className='w-20 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300' src="https://www.sside.com.br/image/cache/catalog/produtos-integracao/6214985-omie___imagem_1__conv-1000x1000.jpg" alt="teste" />
              <div>
                <p className='font-medium'>{product.name}</p>
                <p className=''>Qtd: {product.qtd}</p>
                <p className='font-medium mt-2'>R$:{product.value}</p>
              </div>
              <button class="remove-from-cart-btn" onClick={()=>removeProductToCart(product.id)}>Remover</button>
             </div>

            </>)) 
            : 
            (<><h2>Não contém no array produto</h2></>)}
          </div>
          <div className='flex-col' id='buttons-modal'>
          <p className='font-medium'>Qtd Carrinho: ({productsCount}) </p>
            <p className='font-medium'>Total R$: {productsTotal} </p>
            <button  className='" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"' onClick={handleClick}>Finalizar Pedido</button>
            {error && <p>{error}</p>}
          </div>
      </div>
  </div>
    )
  }
  <>
  </>
}

export default Modal1
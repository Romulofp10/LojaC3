
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CartContext } from '../../context/cartContext';
import { useInsertDocument } from '../../hooks/useInsertDocuments';
import { useAuthValue } from '../../context/authContext';

const FinishPurschase = () => {
  const navigate = useNavigate();
  const {register,handleSubmit,setValue, setFocus} = useForm();
  //hooks
  const { insertDocument, response } = useInsertDocument("pedidos");
  const { user } = useAuthValue();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [addressNumber, setaddressNumber] = useState('');
  const [addInfoHouse, setaddInfoHouse] = useState('');
  const [formerror, setFormError] = useState('');
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      // register({ name: 'address', value: data.logradouro });
      setValue('cep',data.cep);
      setValue('address', data.logradouro);
      setValue('neighboardhood', data.bairro);
      setValue('city', data.localidade);
      setValue('state', data.uf);
      setFocus('addressNumber');
    });
  }

  const onSubmit = async  (data)  => {
    setFormError("");
    if(productsCart.length  === 0 || undefined){
      return setFormError("Seu carrinho esta vazio");
    }
    if (!name | !lastName  | addressNumber == '') {
      return setFormError("Preencha todos os campos, por favor.")

    }
    if(user === null | undefined){
      return setFormError("Faça Login para continuar sua compra")
    }

    try {
      await insertDocument({
        productsCart,
        solicitante: {
          name,
          lastName,
          telephone
        },
        address: {
          cep : data.cep,
          neighboardhood: data.neighboardhood,
          state : data.state,
          city: data.city,
          street: data.address,
          
          addressNumber,
          addInfoHouse
  
        },
        cartTotal: productsTotal,
        cartCount: productsCount,
        uid: user.uid,
        createdBy: user.displayName
      })
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      
    }
  }

  const { productsCart, removeProductToCart, productsCount, productsTotal } = useContext(CartContext);
  return (
    <div className='flex-wrap justify-center'>
      <h2 className='text-center text-4xl'>FINALIZE SEU PEDIDO</h2>
      <div className='md:flex justify-center'>
        <div className="mt-5 item-cart bg-slate-100 w-max-[450px]">
          {productsCart ?
            (productsCart.map((product) => <>
              <div className='flex items-center bg-slate-300 justify-around my-2 rounded-3xl'>
                <img className='w-20 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300' src="https://www.sside.com.br/image/cache/catalog/produtos-integracao/6214985-omie___imagem_1__conv-1000x1000.jpg" alt="teste" />
                <div className='flex justify-between'>
                  <p className='font-medium px-2'>{product.name}</p>
                  <p className='px-2'>Qtd: {product.qtd}</p>
                  <p className='font-medium'>R$:{product.value}</p>
                </div>
                <button class="remove-from-cart-btn" onClick={() => removeProductToCart(product.id)}>Remover</button>
              </div>

            </>))
            :
            (<><h2>Não contém produtos no carrinho</h2></>)}
          <div className='flex-col' id='buttons-modal'>
            <p className='font-medium'>Qtd Carrinho: {productsCount} </p>
            <p className='font-medium'>Total: {productsTotal} </p>

          </div>
          <div className='flex justify-center items-center w-full' >
            <form className='flex flex-wrap'  onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p className='text-center'>Solicitante:</p>
              </div>
              <div className='grid grid-cols-3 w-full'>
                <input type="text" className="max-w-[150px] shadow-sm   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
                <input type="text" className="max-w-[150px] shadow-sm   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="SobreNome" />
                <input type="text" className="max-w-[150px] shadow-sm   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="telefone" />
              </div>
              <div className='grid grid-cols-3 w-full'>
                <input type="text" className="max-w-[150px] shadow-sm   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5" {...register("cep")} onBlur={checkCEP} placeholder="CEP" />
                <input type="text" className="max-w-[150px] shadow-sm   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5" {...register("neighboardhood")} placeholder="BAIRRO" />
                <input type="text" className="max-w-[150px] shadow-sm   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5" {...register("state")} placeholder="ESTADO" />
                <input type="text" className="max-w-[150px] shadow-sm   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5" {...register("city")} placeholder="CIDADE" />
                <input type="text" className="max-w-[150px] shadow-sm   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5" {...register("address")} placeholder="RUA" />
                <input type="text" className="max-w-[150px] shadow-sm   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5"  value={addressNumber} onChange={(e) => setaddressNumber(e.target.value)} placeholder="Nº" />
                <input type="text" className="max-w-[150px] shadow-sm   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5" {...register("addInfoAddress")}  value={addInfoHouse} onChange={(e) => setaddInfoHouse(e.target.value)} placeholder="COMPLEMENTO" />
                <button className='" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300´ m-1 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"' >Finalizar Pedido</button>
              </div>

            </form>

          </div>
          {formerror && <p className='bg-red-600   w-full text-center m-2'>{formerror}</p>}

        </div>
      </div>
    </div>
  )
}

export default FinishPurschase
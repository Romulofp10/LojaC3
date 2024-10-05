import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAuthValue } from '../../context/authContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';



const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;
  const userName = user.displayName;
  const { documents: products, loading } = useFetchDocuments("products", null, uid);
  const { documents: pedidos, } = useFetchDocuments("pedidos", null, uid);
  const { deleteDocument } = useDeleteDocument("products");
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  if (loading) {
    <>
      <div className='flex items-center justify-center'>
        <div className='border-2 rounded-xl block items-center justify-center w-[300px] py-6 text-2xl text-center bg-slate-700'>
          <p className='text-blue-700 font-bold'>Carregando...</p>
          <p>Aguarde</p>
        </div>
      </div>
    </>
  }
  return (
    <>
      <div className=' bg-slate-950  py-6 text-white'>
        <div>
          <h2>Ola {userName}</h2>
        </div>
        <h2 className='font-semibold text-5xl text-center'>Dashboard</h2>
        <div className='flex justify-around'>
          <h2 className='pl-10 text-2xl'>Gerencie os seus produtos</h2>
          <Link to='/product/create' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Criar produto!</Link>
        </div>
        {products == 0
          ?
          (<>
            <div className='flex items-center justify-center'>
              <div className='border-2 rounded-xl block items-center justify-center w-[300px] py-6 text-2xl text-center bg-slate-700'>
                <p className='text-red-700 font-bold'>Ops!</p>
                <p>Não foram encontrado nenhum produtos</p>
                <Link to='/product/create' className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center" > Criar produto!</Link>
              </div>
            </div>
          </>)
          : (<div className='md:ml-60 min-[560px]:ml-20 items-center justify-center'>
            <div className='flex justify-between p-2 w-[80%]'>
              <span>Name</span>
              <span>Actions</span>
            </div>
            {products && products.map((item) =>
              <div key={item.id} className=' text-black flex justify-between items-center w-[80%] p-3  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-300  text-4xl' >
                <h2 className='text-2xl'>{item.productName}</h2>
                <h2 className='text-2xl'>R$: {item.productValue}</h2>
                <div>
                  <Link to={`/details/${item.id}`} className="text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Ver</Link>
                  <Link to={`/product/update/${item.id}`} className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none m-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Editar</Link>
                  <button onClick={() => {
                    if (window.confirm('Deseja deletar esse post?'))
                      deleteDocument(item.id)
                  }} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Excluir</button>
                </div>
              </div>
            )}
          </div>)}
        <h2 className='text-white text-center py-4'>Veja os pedidos feito em sua loja!</h2>
        {pedidos == 0 ?
          (<>
            <div className='flex items-center justify-center'>
              <div className='border-2 rounded-xl block items-center justify-center w-[300px] py-6 text-2xl text-center bg-slate-700'>
                <p className='text-red-700 font-bold'>Ops!</p>
                <p>Não foram encontrado nenhum Pedido feito ainda , não desanime!</p>
              </div>
            </div>
          </>)
          :
          (<div className='flex-col flex items-center'>
            {pedidos && pedidos.map((pedido) =>
              <div className='flex flex-col  bg-slate-200 border-  my-2 text-black w-[480px] border-2 rounded-sm sm:max-w-[350px] md:max-w-[550px]' key={pedido.id}>
                <div className='flex w-full bg-white justify-between '>
                  <p className='font-medium '>Solicitante: <span className='font-light'>{pedido.solicitante.name} {pedido.solicitante.lastName}</span></p>
                  <p className='font-medium'>Telefone: <span className='font-light'> {pedido.solicitante.telephone}</span></p>
                </div>
                <br />
                <div>
                  {pedido.productsCart.map((produto) => (
                    <div className='flex justify-center bg-white w-full my-1'>
                      <p className='font-medium '>Produto:<span className='font-light'> {produto.name}   Qtd: {produto.qtd} R$:{produto.value}</span></p>
                    </div>
                  ))}

                </div>

                <div className='flex flex-col'>
                  <p className='font-medium bg-white '>Cep: <span className='font-light'> {pedido.address.cep} </span> Bairro: <span className='font-light'>{pedido.address.neighboardhood}</span> </p>
                  <p className='font-medium bg-slate-200 '>Endereço: <span className='font-light'> {pedido.address.street} {pedido.address.addressNumber}</span></p>
                  <p className='font-medium bg-slate-200 '>UF: <span className='font-light'> {pedido.address.state}</span></p>
                </div>

              </div>)
            }
          </div>)
        }
      </div>
    </>
  );
}

export default Dashboard
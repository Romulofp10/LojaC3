
import { Link } from 'react-router-dom'
import './Home.css'
import CardService from '../../components/cardService/CardService'
import { CardProducts } from '../../components/cardProducts/CardProducts'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useEffect } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardPlans from '../../components/cardPlans/CardPlans'
import CardComments from '../../components/cardComments/CardComments'

const Home = () => {
  function notify(){
    toast.success("Produto Adicionado ao carrinho !",{autoClose: 1050});
  } 
  useEffect(() => {window.scrollTo(0, 0)  
  },[]);
  
  const {documents:products ,loading,error} = useFetchDocuments('products')
  return (
    <>
    <div className='flex justify-around pt-10 items-center flex-col  text-center home-container bg-home w-full  h-[420px] bg-zinc-900 bg-cover bg-center bg-no-repeat '>
        <ToastContainer />
        <div className="title">
        <h1 className='pt-8 font-medium text-white'>Precisando de um software?</h1>
        <p  className=' text-white'>Veja o que podemos oferecer de serviços para auxiliar na sua empresa!</p>
        </div>
        <div>
        <button className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Saiba mais</button>
        </div>
    </div>
    <div className="flex mt-1 items-center flex-col services">
      <h1 className='m-4 text-2xl font-medium'>Serviços que oferecemos</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 ' >
            <CardService title='Landing-Pages' description='Oferecemos serviços de landing-pages,paginas institucionais , midia-social e muito mais'/>
            <CardService title='Serviços SAAS' description='Criamos uma automação que sua empresa precisa'/>
            <CardService title='Social-Midia' description='Ajustamos sua rede social para trazer mais clientes para o seu negócio e alavancar suas vendas'/>
      </div>
    </div>
    <div className='w-full bg-slate-100 m-0 my-2 p-5 flex-col text-center items-center receive-email'>
      <p className='my-10  text-cyan-950'>Ficou interessado?</p>
      <button  className="mb-1 mr-2 text-white bg-green-700 hover:bg-grenn-800 focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center"> WhatsApp </button><button  className="text-white bg-purple-800 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:purple-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"> Instagram </button>
      <h2 className='font-medium text-cyan-950'>Fale conosco!</h2>
    </div>

    <div className="flex mt-1 items-center flex-col services">
      <h1 className='m-4 text-2xl font-medium'>Serviços que oferecemos</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 ' >
            <CardPlans/>
            <CardPlans/>
            <CardPlans/>
            
      </div>
    </div>

    <div className='flex mt-1 items-center flex-col services'>
      <h1 className='py-6'>Avaliação dos nossos clientes!</h1>
      <CardComments/>
    </div>

    <div className='flex mt-1 items-center flex-col products'>
       <h1 className='m-4 text-2xl font-medium'>Veja também nossos produtos</h1>
       <div className="grid grid-cols-2 md:grid-cols-4">
        {products && products.map((product)=>(
          <CardProducts key={product.id} title={product.productName} notifyToast={()=>notify()} id={product.id} description={product.productDescription} img={product.productImg} value={product.productValue}/>
        ))}
       </div>
       {!products &&(
        <>
          <p>Não foram encontrado produtos!</p>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"><Link to='/product/create'>Clique aqui para criar</Link> </button>
          
        </>
      )
      }
    </div>
    <div className='w-full bg-slate-300 m-0 my-2 p-5 flex-col text-center items-center receive-email'>
      <h2 className='font-medium text-cyan-950'>Receba novidade dos nossos produtos</h2>
      <input type="text" className="shadow-sm w-[250px] h-[40px] mr-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5:bg-gray-700" 
                          placeholder="Coloque seu email para novidades...."/>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"> Registrar email </button>
    </div>
   </>
  )
}

export default Home
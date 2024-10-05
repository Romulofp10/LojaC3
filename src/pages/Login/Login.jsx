
import React, { useState,useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import './Login.css'

const Login = () => {
  useEffect(() => {window.scrollTo(0, 0)  
  },[]);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("");
  const [error,setError] = useState('');
  const {LogIn, error:authError , loading} = useAuthentication();


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    const user={
      email,
      password,
    }

    console.log(user);

      const res = await LogIn(user);
  
      console.log(res);
  };

  useEffect(()=>{

    if(authError){
      setError(authError);
    }

  },[authError]);



  return (
    <div className='login flex items-center justify-items-center'>
      <div id='backlogin' className='w-[550px]  h-[600px] bg-login bg-center bg-no-repeat'>
      </div>
     <div>
      <div className='md:ml-[200px] sm:ml-0 pl-18'>
      <form onSubmit={handleSubmit} className='flex text-center flex-col justify-center items-center '>
      <h2 className='text-center font-bold'>Bem vindo!</h2>
        <h3 className=''>Faça login</h3>
        <div className="mb-5">
                        <label for="email" className="pt-1 block w-[300px] mb-2 text-sm font-medium text-black dark:text-black">Your email</label>
                        <input type="email" id="email"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                          value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label for="password" className="pt-1 block w-[300px] mb-2 text-sm font-medium text-black dark:text-black">Your password</label>
                        <input type="password" id="password"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                          value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password...." required />
                    </div>
                    {!loading && <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Login </button>}
                    {loading && < button disabled type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Aguarde... </button>}
      </form>
      {error && <p className='font-bold text-red-600 bg-slate-100 t-2'>{error}</p>}
      </div>
     </div>
    </div>
  )
}

export default Login
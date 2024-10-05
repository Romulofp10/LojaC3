import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

 
//components
import Loading from './components/loading/Loading.jsx';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer.jsx';

//hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication.js';

//context
import { AuthProvider } from './context/authContext.jsx';
import {CartProvider} from './context/cartContext.jsx';

//pages
import CreateProduct from './pages/CreateProduct/CreateProduct.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup.jsx';
import Login from './pages/Login/Login.jsx';
import Dashboard from './pages/Dashboard/Dashboard';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import About from './pages/About/About';
import UpdateProduct from './pages/updateProduct/updateProduct.jsx'
import FinishPurschase from './pages/FinishPurschase/FinishPurschase.jsx'

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;


  useEffect(() => {

    onAuthStateChanged(
      auth,
      (user) => {
        setUser(user);
      }
    );

  }, [auth]);

  if (loadingUser) {
    console.log('entrou no loading')
    return <div id='loading' className=' bg-blue-800'>
            <div className='bg-slate-50' id='box-loading'>
              <Loading/>
            </div>
    </div>

  }



  return (
    <div className="app">
      <AuthProvider value={{ user }}>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <div className="app-containerI">
            <Routes>
            <Route path='/home' element={<Home />} />
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/details/:id' element={<ProductDetails/>} />
              <Route path='/cart' element={<FinishPurschase/>}/>
              <Route path='/login' element={!user ? <Login /> : <Navigate to={'/'} />} />
              <Route path='/signup' element={!user ? <Signup /> : <Navigate to={'/'} />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to={'/login'} />} />
              <Route path='/product/create' element={user ? <CreateProduct /> : <Navigate to={'/login'} />} />
              <Route path='/product/update/:id' element={user ? <UpdateProduct /> : <Navigate to={'/login'} />} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}

export default App

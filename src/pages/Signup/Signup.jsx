import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css'
//hooks
import { useAuthentication } from '../../hooks/useAuthentication';

const Signup = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const { createUser, loading, error: authError, } = useAuthentication();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return
        } else {
            if (password.length < 6) {
                setError("As senhas precisam ser compostas de no minimo 6 caracters!")
                return
            }
            else {
                if (age < 18) {
                    setError("idade maior que 18")

                } else {
                    const user = {
                        displayName,
                        email,
                        password,
                        age
                    }
                    const res = await createUser(user);
                    if (res != null) {
                        navigate('/')
                    }

                }

            }

        }

    };
    useEffect(() => {

        if (authError) {
            setError(authError);
        }

    }, [authError]);

    return (
        <div className='Signup-page'>
            <h2 className='text-center'>Discovery more possibility</h2>
            <form className="max-w-sm mx-auto p-10" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your Name</label>
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="username..." required />
                </div>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your Age:</label>
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age +18..." required />
                </div>
                <div className="mb-5">
                    <label for="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
                    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password..." required />
                </div>
                <div className="mb-5">
                    <label for="repeat-password" className="block mb-2 text-sm font-medium text-white dark:text-white">Repeat password</label>
                    <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm-password..." required />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="terms" className="ms-2 text-sm font-medium  text-white dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div>
                {!loading && <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>}
                {loading && <button type="submit" disabled className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Aguarde...</button>}
                {error && <p className='font-bold text-red-600 bg-slate-100 t-2'>{error}</p>}
            </form>

        </div>
    )

}




export default Signup
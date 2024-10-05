import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';
import { db } from '../firebase/config.js'
import { useState, useEffect } from 'react';
export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    //clean up
    //deal with memory leak, para nao fica armazenado no cache da memoria nenhum componente.
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfCancelled();
        setError(null);
        setLoading(true);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
             await updateProfile(user, { displayName: data.displayName })
            setLoading(false);
            return user;
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail ja cadastrado."
            } else {
                systemErrorMessage = "Ocorreu um error, tente mais tarde.";
            }
            setLoading(false);
            setError(systemErrorMessage);
        }
        setLoading(false);
    };

    //LogIn
   async function LogIn(data) {
        checkIfCancelled();
        setLoading(true);
        setError(null);

        try {
            await signInWithEmailAndPassword(auth,data.email,data.password);
            setLoading(false)
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);
            let systemErrorMessage;

            if (error.message.includes("auth/invalid-credential")) {
                systemErrorMessage = "Usuario nao encontrado."

            } else if (error.message.includes("auth/invalid-credential")) {
                systemErrorMessage = "Senha errada!"
            }
            else {
                systemErrorMessage = "Ocorreu um erro, tente mais tarde."
            }

            setError(systemErrorMessage)
            setLoading(false);
        }

   }


   //Loagout 

    function LogOut(){
     checkIfCancelled();
     setLoading(true);
     setError(null);
     signOut(auth);


   }

    //evita memoryy leak
    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        createUser,
        LogIn,
        LogOut,
        error,
        loading,
        auth
    }
}
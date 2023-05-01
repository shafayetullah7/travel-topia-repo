import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase_init';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
    console.log(user);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            if(currentUser)setUser(currentUser);
            setLoading(false);

        })

        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        auth,
        user,
        setUser,
        createUser,
        loginUser,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
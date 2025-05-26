import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           setUser(currentUser);
           setLoading(false)
           console.log('user in auth state change', currentUser);
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

    const userSignOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        loading,
        signIn,
        user,
        userSignOut
    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
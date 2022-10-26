import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config'
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] =useState(true);

    const providerLogin = provider => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    };

    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    };

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoader(false);
    });
    return () =>{
        unsubscribe();
    }
    } ,[] )

    const authInfo =  {user, loader, providerLogin, createUser, updateUserProfile, loginUser, logOut};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
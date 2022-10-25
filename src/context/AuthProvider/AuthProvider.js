import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup,GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import app from '../../Firebase/firebase.config'
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const providerLogin = provider =>{signInWithPopup(auth, provider)};

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{console.log('user state change', currentUser);
        setUser(currentUser);
    });
    return () =>{
        unsubscribe();
    }
    } ,[] )

    const authInfo =  {user, providerLogin};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
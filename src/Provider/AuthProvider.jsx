import React, { createContext } from 'react';

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user=null;
    const createUser=(email,password)=>{

        return createUserWithEmailAndPassword(auth, email,password)

    }
    const authInfo={
        user,
        createUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
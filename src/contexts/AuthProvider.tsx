import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

interface AuthContextType {
    user: any;
    loading: boolean;
    createUser: (email: string, password: string) => Promise<any>;
    signUpWithGmail: () => Promise<any>;
    login: (email: string, password: string) => Promise<any>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
const auth = getAuth(app); 
const googleProvider = new GoogleAuthProvider();

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // create user using gmail
    const signUpWithGmail = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logout function
    const logout = () => {
        return signOut(auth);
    }

    // user is available or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser);
            setLoading(false);
        })
        return () => {
            return unsubscribe()
        }  
    })

    const authInfo = {
        user,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logout,
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
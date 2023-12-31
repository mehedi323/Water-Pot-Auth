import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =  useState(true)

    const GoogleProvider = new GoogleAuthProvider();

    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SingInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("Current value of the", currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unSubscribe
        }
    }, []);

    const singInUserWithGoogle = () =>{
        return signInWithPopup(auth, GoogleProvider)
    }

    const logOut = () =>{ 
        setLoading(true)
        return signOut(auth)
    }

    const AuthInfo = {
        user,
        loading,
        CreateUser, 
        SingInUser,
        singInUserWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}
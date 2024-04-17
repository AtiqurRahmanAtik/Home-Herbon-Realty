import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../fireBase/fireBase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth"; // Import FacebookAuthProvider

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user);

    // Register
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user 
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google sign in
    const googleUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Facebook login
    const facebookUser = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        });
        return () => unsubscribe(); 
    }, []);



    //singout 
    const LogOut = ()=>{
        return signOut(auth)
    }

    const AuthInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        googleUser,
        facebookUser,
        LogOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

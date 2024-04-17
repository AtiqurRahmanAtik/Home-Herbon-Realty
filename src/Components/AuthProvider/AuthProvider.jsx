import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../fireBase/fireBase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    console.log(user);

    // Register
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in user 
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google sign in
    const googleUser = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe(); // Cleanup function
    }, []);

    const AuthInfo = {
        registerUser,
        signInUser,
        googleUser
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

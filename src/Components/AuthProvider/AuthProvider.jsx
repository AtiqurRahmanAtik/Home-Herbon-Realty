import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../fireBase/fireBase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";


export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    console.log(user);

    //register
    const registerUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sing in user 
    const singInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google user
    const googleUser =()=>{
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
             
            } 
          });
    },[])



    const AuthInfo = {
        registerUser,
        singInUser,
        googleUser
    }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
  
};

export default ProtectedRoute;
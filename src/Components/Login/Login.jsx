import { Link } from "react-router-dom";
import NavigationBar from "../Navbar/NavigationBar";
import {  useState } from "react";

import { useForm } from "react-hook-form";
import UseAuth from "../Hooks/UseAuth";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";

const Login = () => {

    const {singInUser,  googleUser} = UseAuth();
   
    const [error,setError] = useState(null);


    const {register, handleSubmit,  formState: { errors },
} = useForm()

const onSubmit = (data) =>{
  const {email,password} = data
  singInUser(email,password)
  .then(result =>{
      console.log(result);
      setError('Successfull login');
  })
  .catch(error =>{
    console.log(error);
    setError(error.message);
  })
};


//handlegoogle login
   


    return (
        <div className="container mx-auto">
            <NavigationBar></NavigationBar>
              
     <div className="my-11 space-y-7">
    
        <h2 className="text-2xl font-bold text-center">Please Login Here </h2>

        <form  onSubmit={handleSubmit(onSubmit)} className="md:w-2/4 lg:w-2/4 mx-auto ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-black font-normal">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" 
           {...register("email", { required: true })}
           />
            {errors.email && <span  className="my-1 text-red-600 font-bold">This field is required</span>}  
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-black font-normal">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" 
             {...register("password", { required: true })}
             />
              {errors.password && <span  className="my-1 text-red-600 font-bold">This field is required</span>}  
       
        </div>

        <div className="my-2">
        {
            error ? <p className="text-xl text-red-600 font-bold"> {error}</p>
            : <p className="text-xl text-blue-700 ">{error} </p>
        }
        </div> 
        
        <div className="my-2">
            <p className="text-xl font-normal text-black">Do Not Have An Account Please <Link to='/register' ><button className="btn btn-active btn-link text-xl font-normal ">Register</button></Link></p>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

    
        </form>


<button onClick={()=>googleUser()} className="btn btn-accent">Google</button>

        </div>

 
        </div>
    );
};

export default Login;
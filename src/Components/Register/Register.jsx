import { Link } from "react-router-dom";
import NavigationBar from "../Navbar/NavigationBar";
import {  useState } from "react";

import { useForm } from "react-hook-form";
import UseAuth from "../Hooks/UseAuth";


const Register = () => {

    const [error,setError] = useState(null);

    const { registerUser} = UseAuth();
   



    const {register, handleSubmit,  formState: { errors },
      } = useForm()
    
      const onSubmit = (data) =>{
        const {email,password} = data
        registerUser(email,password)
        .then(result =>{
            console.log(result);
            setError("Register Successfully ")
        })
      };



    return (
        <div className="container mx-auto">

            <NavigationBar></NavigationBar>


            <div className="my-11 space-y-7">
            <h2 className="text-3xl font-bold text-center">Please Register Here</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="md:w-2/4 lg:w-2/4 mx-auto ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-black font-normal">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter the Name" className="input input-bordered" 
           {...register("FullName", { required: true })}
          />
           {errors.FullName && <span  className="my-1 text-red-600 font-bold">This field is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-black font-normal">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter the Email" className="input input-bordered" 
            {...register("email", { required: true })}
            />
             {errors.email && <span  className="my-1 text-red-600 font-bold">This field is required</span>} 
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-black font-normal">Photo URL </span>
          </label>
          <input type="text" name="Photo" placeholder="Photo URL" className="input input-bordered"
          
          {...register("Photo", { required: true })}
          />
           {errors.Photo && <span  className="my-1 text-red-600 font-bold">This field is required</span>} 
       
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
                error && <p className="text-xl text-[#eab308] font-bold ">{error} </p>
            }
        </div>

        <div className="my-2">
            <p className="text-xl font-normal text-black">Already Have An Account <Link to='/login' ><button className="btn btn-active btn-link text-xl font-normal ">Login</button></Link></p>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        </form>
        </div>

        </div>
    );
};

export default Register;
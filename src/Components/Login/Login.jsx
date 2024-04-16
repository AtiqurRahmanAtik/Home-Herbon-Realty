import { Link } from "react-router-dom";
import NavigationBar from "../Navbar/NavigationBar";


const Login = () => {
    return (
        <div className="container mx-auto">
            <NavigationBar></NavigationBar>
              
     <div className="my-11 space-y-7">
    
        <h2 className="text-2xl font-bold text-center">Please Login Here </h2>

        <form className="md:w-2/4 lg:w-2/4 mx-auto ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-black font-normal">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-black font-normal">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
       
        </div>

        <div className="my-2">
            <p className="text-xl font-normal text-black">Do Not Have An Account Please <Link to='/register' ><button className="btn btn-active btn-link text-xl font-normal ">Register</button></Link></p>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        </div>

 
        </div>
    );
};

export default Login;
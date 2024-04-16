import { Link } from "react-router-dom";
import NavigationBar from "../Navbar/NavigationBar";


const Register = () => {
    return (
        <div className="container mx-auto">

            <NavigationBar></NavigationBar>


            <div className="my-11 space-y-7">
            <h2 className="text-3xl font-bold text-center">Please Register Here</h2>

        <form className="md:w-2/4 lg:w-2/4 mx-auto ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-black font-normal">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter the Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-black font-normal">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter the Email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-black font-normal">Photo URL </span>
          </label>
          <input type="text" name="PhotoURL" placeholder="password" className="input input-bordered" required />
       
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-black font-normal">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
       
        </div>

        <div className="my-2">
            <p className="text-xl font-normal text-black">Already Have An Account <Link to='/login' ><button className="btn btn-active btn-link text-xl font-normal ">Login</button></Link></p>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        </div>

        </div>
    );
};

export default Register;
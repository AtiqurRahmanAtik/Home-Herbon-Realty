import { Link, NavLink } from "react-router-dom";
import photo from "../../assets/Images/user.png";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavigationBar = () => {

  const {user, LogOut} = useContext(AuthContext);

  //handlesingout
  const handleSingOut = ()=>{
    LogOut()
    .then()
    .catch()
  }

  const Links = <>

        <li><NavLink to='/'>Home </NavLink></li>
        <li><NavLink >Item 1</NavLink></li>
    
  </> 
    return (
        
            <div className="navbar bg-amber-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
       
        {Links}

      </ul>

    </div>
    <Link to='/'> <MdOutlineRealEstateAgent className="text-5xl"></MdOutlineRealEstateAgent></Link>
   
    <a className="btn btn-ghost text-xl">Home  <br /> Harbor Realty</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-3">
     
        {Links}

    </ul>
  </div>
  <div className="navbar-end">

  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={photo} />
        </div>
      </div>
      {
        user ? <div>
            <span>{user.email}</span>
           <img className="w-44" src={user.photo} alt="" />
           <button onClick={handleSingOut} className="btn">Sing Out</button>
        </div> :

        <Link to='/login'>
        <button  className="btn">Login</button>
        </Link>
       
        
      }

 

  </div>
</div>
      
    );
};

export default NavigationBar;
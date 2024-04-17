import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const Root = () => (
    <div >
        <div  className="container mx-auto my-9">

      
        <Outlet />
        </div>

        <div>
        <Footer></Footer>
        </div>
         </div>
       
            
       
       
  
);

export default Root;
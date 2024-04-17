import Footer from "../Footer/Footer";
import NavigationBar from "../Navbar/NavigationBar";




const Home = () => {
    return (
        <div className="container mx-auto my-9">
            
            <div className="space-y-11">

           <NavigationBar></NavigationBar>
           <Footer></Footer>
            </div>
         
        </div>
    );
};

export default Home;
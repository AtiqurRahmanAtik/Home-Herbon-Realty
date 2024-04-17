
import Banner from "../Banner/Banner";
import NavigationBar from "../Navbar/NavigationBar";




const Home = () => {
    return (
        <div className="container mx-auto my-9">
            
            <div className="space-y-11">

           <NavigationBar></NavigationBar>
           <Banner></Banner>
          
            </div>
         
        </div>
    );
};

export default Home;
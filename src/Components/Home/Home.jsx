
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import NavigationBar from "../Navbar/NavigationBar";
import Category from "../Category/Category";




const Home = () => {


    const categories = useLoaderData([]);
  

    return (
        <div className="container mx-auto my-9">
            
            <div className="space-y-11">

           <NavigationBar></NavigationBar>
           <Banner></Banner>

            
           <div>
                <h2 className="font-bold text-3xl text-black text-center">Real Estate Property Category </h2>
            </div>

            <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
                {
                    categories.map((item) => <Category key={item.id} item={item}></Category>)
                }
            </div>
          
            </div>
         
        </div>
    );
};

export default Home;
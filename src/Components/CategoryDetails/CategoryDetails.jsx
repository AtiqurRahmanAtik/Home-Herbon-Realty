import { useParams } from "react-router-dom";
import NavigationBar from "../Navbar/NavigationBar";


const CategoryDetails = () => {
    const {id,estate_title} = useParams();
    console.log(id);
    return (
        <div className="my-9 space-y-9">
            <NavigationBar></NavigationBar>
            <h2 className="text-3xl font-bold">Category : {estate_title}</h2>
        </div>
    );
};

export default CategoryDetails;
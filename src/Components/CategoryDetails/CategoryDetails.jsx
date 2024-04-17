import { useParams } from "react-router-dom";
import NavigationBar from "../Navbar/NavigationBar";


const CategoryDetails = () => {
    const {id} = useParams();
    return (
        <div className="my-9 space-y-9">
            <NavigationBar></NavigationBar>
            <h2>Category : </h2>
        </div>
    );
};

export default CategoryDetails;
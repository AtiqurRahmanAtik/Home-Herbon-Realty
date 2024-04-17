import { Link, useRouteError } from "react-router-dom";
import image from "../../assets/Images/404.jpg";

const ErrorPage = () => {

    const error = useRouteError();
  console.error(error);

    return (
        <div className="text-center  space-y-3">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <div>
        <img className="w-96 mx-auto" src={image} alt="" />
      </div>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to='/'> <button className="btn btn-primary my-3">Back Home Page</button></Link> 
    </div>
    );
};

export default ErrorPage;
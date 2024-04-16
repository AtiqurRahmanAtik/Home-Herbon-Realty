import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
  console.error(error);

    return (
        <div className="text-center my-11 space-y-3">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to='/'> <button className="btn btn-primary my-3">Back Home Page</button></Link> 
    </div>
    );
};

export default ErrorPage;
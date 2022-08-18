import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Oops.....</h1>
            <p>Page Not Found</p>
            <Link to="/">Back To Homepage...</Link>
        </div>
    );
}
 
export default NotFound;
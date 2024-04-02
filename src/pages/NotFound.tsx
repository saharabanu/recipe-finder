import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div>
            <h2>Page not found</h2>
            <Link to='/'>Bo Back home</Link>
        </div>
    );
};

export default NotFound;
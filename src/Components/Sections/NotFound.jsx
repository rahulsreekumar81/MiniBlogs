import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-container">
      <h2>Error 404 ..!Page Not Found </h2>
      <p>Oops the page is not found</p>
      <Link to="/">Go back to Homepage..</Link>
    </div>
  );
};

export default NotFound;

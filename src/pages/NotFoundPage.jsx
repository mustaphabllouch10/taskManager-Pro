/**
 * 404 page - shown for unknown routes.
 * Link goes to home (landing) not board.
 */
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-message-404">Oops! Page Not Found</h2>
      <p className="error-description">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      
      {/* Button to go back to Home (Board) */}
      <Link to="/" className="btn-home">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
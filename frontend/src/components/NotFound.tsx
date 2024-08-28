import React from 'react';
import { Link } from 'react-router-dom';
//import './NotFound.css'; // Import custom styles if needed

const NotFound: React.FC = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404 - Page Not Found</h1>
            <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="not-found-link">Go to Home</Link>
        </div>
    );
};

export default NotFound;

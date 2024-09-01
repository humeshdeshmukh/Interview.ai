import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap'; // Import Bootstrap components
import './NotFound.css'; // Ensure you have modern styles in this file

const NotFound: React.FC = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center not-found-container">
      <div className="not-found-content">
        <h1 className="display-1 mb-4">404</h1>
        <h2 className="display-2 mb-3">Page Not Found</h2>
        <p className="lead mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link to="/">
          <Button variant="primary" size="lg" className="not-found-button">
            Go to Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap'; // Import Bootstrap components

const NotFound: React.FC = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <div className="not-found-container">
        <h1 className="display-1 mb-4">404</h1>
        <h2 className="display-4 mb-3">Page Not Found</h2>
        <p className="lead mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Go to Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;

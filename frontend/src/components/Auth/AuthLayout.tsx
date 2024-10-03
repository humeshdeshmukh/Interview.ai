import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AuthLayout.css'; // Import your custom styles

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Container className="auth-layout d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <main className="auth-content">
            {children}
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;

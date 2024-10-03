import React, { useState } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Adjust the path as needed

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // Assuming the useAuth hook provides a login function

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Attempt to login
      await login(email, password);
      navigate('/'); // Redirect to home or another page after successful login
    } catch (error: any) {
      setError(error.message || 'Failed to log in');
    } finally {
      setLoading(false);
    }
  };

  // Handle forgot password action
  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Navigate to the password reset page
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="auth-card p-5 shadow-lg rounded bg-white" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Welcome Back!</h2>
        {error && <Alert variant="danger" className="text-center">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3"
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3"
            />
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit" 
            disabled={loading} 
            className="w-100 py-3">
            {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
          </Button>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <Button 
              variant="link" 
              className="p-0 text-decoration-none"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </Button>
            <Button 
              variant="link" 
              className="p-0 text-decoration-none"
              onClick={() => navigate('/register')}
            >
              Don't have an account? Register
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default LoginForm;

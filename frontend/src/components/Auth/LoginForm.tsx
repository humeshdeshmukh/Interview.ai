import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Adjust the path as needed

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { login } = useAuth(); // Assuming the useAuth hook provides a login function

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login(email, password);
      navigate('/'); // Redirect to home or another page after successful login
    } catch (error: any) {
      setError(error.message || 'Failed to log in');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Navigate to the password reset page
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Login</h1>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
        <div className="mt-3">
          <span>Don't have an account? </span>
          <Button variant="link" onClick={() => navigate('/register')}>
            Register
          </Button>
        </div>
        <div className="mt-2">
          <Button variant="link" onClick={handleForgotPassword}>
            Forgot Password?
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axiosInstance from '../../services/api'; // Import the Axios instance

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axiosInstance.post('/auth/forgot-password', { email });
      setMessage('If an account with that email exists, you will receive a password reset link.');
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to send password reset link');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Forgot Password</h1>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Reset Link'}
        </Button>
      </Form>
    </Container>
  );
};

export default ForgotPassword;

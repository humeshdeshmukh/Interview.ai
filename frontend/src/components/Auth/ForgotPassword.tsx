import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import AuthLayout from './AuthLayout'; // Adjust the import path as needed

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate an API call
    try {
      // Here you would typically call your backend service to handle password reset
      // For example: await authService.requestPasswordReset(email);
      console.log('Password reset requested for:', email);
      
      setMessage('If an account with that email exists, a password reset link will be sent to it.');
      setError(null);
    } catch (err) {
      setError('An error occurred while processing your request.');
      setMessage('');
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-center mb-4">Forgot Password</h2>
      {message && <Alert variant="info">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mt-3">
          Request Password Reset
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default ForgotPassword;

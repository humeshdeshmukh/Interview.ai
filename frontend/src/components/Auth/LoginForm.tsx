import React, { useState } from 'react';
import { Form, Button, Container, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Adjust the path as needed
import { GoogleLogin } from 'react-google-login'; // Import GoogleLogin component
import axiosInstance from '../../services/api'; // Adjust the path as needed
import './LoginForm.css'; // Adjust the path as needed

const LoginForm: React.FC = () => {
  const [identifier, setIdentifier] = useState<string>(''); // Used for email or phone
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
      await login(identifier, password); // Use identifier for email or phone number
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

  // Handle Google login success
  const handleGoogleLoginSuccess = async (response: any) => {
    try {
      const { tokenId } = response;
      const res = await axiosInstance.post('/auth/google', { idToken: tokenId });

      if (res.status === 200) {
        // Perform additional login actions if needed
        navigate('/'); // Redirect to home or another page after successful login
      }
    } catch (error) {
      setError('Failed to login with Google. Please try again.');
      console.error('Google login error:', error);
    }
  };

  // Handle Google login failure
  const handleGoogleLoginFailure = (response: any) => {
    console.error('Google login failed:', response);
    setError('Failed to login with Google. Please try again.');
  };

  // Correctly declaring googleClientId
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''; // Ensure this is set in your .env file

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="auth-card p-5 shadow-lg rounded bg-white" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Welcome Back!</h2>
        {error && <Alert variant="danger" className="text-center">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formIdentifier" className="mb-3">
            <Form.Label>Email address or Phone number</Form.Label>
            <Form.Control
              type="text" // Allow text for both email and phone number
              placeholder="Enter your email or phone number"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
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

        {/* Google Login Button */}
        <div className="mt-4">
          <GoogleLogin
            clientId={googleClientId} // Use your Google client ID
            buttonText="Login with Google"
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
            cookiePolicy={'single_host_origin'}
            className="w-100 py-3"
          />
        </div>
      </div>
    </Container>
  );
};

export default LoginForm;

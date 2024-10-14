import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axiosInstance from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordStrengthBar from 'react-password-strength-bar';
import GoogleLogin from 'react-google-login';

import './RegisterForm.css'; // Import the CSS file

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    identifier: string;
    password: string;
    confirmPassword: string;
  }>({
    identifier: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<{
    identifier?: string;
    password?: string;
    confirmPassword?: string;
    general?: string;
  }>({});

  const [loading, setLoading] = useState<boolean>(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: { identifier?: string; password?: string; confirmPassword?: string } = {};

    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    if (!emailRegex.test(formData.identifier) && !phoneRegex.test(formData.identifier)) {
      newErrors.identifier = 'Please enter a valid email address or phone number.';
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await axiosInstance.post('/auth/register', {
        identifier: formData.identifier,
        password: formData.password,
      });

      if (response.status === 201) {
        if (register) {
          await register(formData.identifier, formData.password);
        }
        toast.success('Registration successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        toast.error(response.data.message || 'Registration failed. Please try again.');
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      if (error.response) {
        toast.error(error.response.data?.message || 'Registration failed. Please try again.');
      } else if (error.request) {
        toast.error('Server did not respond. Please try again later.');
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (response: any) => {
    try {
      const { tokenId } = response;
      const res = await axiosInstance.post('/auth/google', { idToken: tokenId });

      if (res.status === 200) {
        toast.success('Google login successful! Redirecting...');
        setTimeout(() => navigate('/dashboard'), 2000);
      }
    } catch (error) {
      console.error('Google login error:', error);
      toast.error('Google login failed. Please try again.');
    }
  };

  const handleGoogleLoginFailure = (response: any) => {
    console.error('Google login failed:', response);
    toast.error('Google login failed. Please try again.');
  };

  // Correctly declaring googleClientId
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
        {errors.general && (
          <div className="text-red-500 mb-4 p-2 bg-red-100 rounded">
            {errors.general}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="identifier" className="block text-gray-700 mb-2">
            Email or Phone Number:
          </label>
          <input
            type="text"
            id="identifier"
            value={formData.identifier}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.identifier ? 'border-red-500' : 'border-gray-300'} rounded`}
            disabled={loading}
            required
            aria-label="Email or Phone Number"
          />
          {errors.identifier && <p className="text-red-500 text-sm mt-2">{errors.identifier}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
            disabled={loading}
            required
            aria-label="Password"
          />
          <PasswordStrengthBar password={formData.password} />
          {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded`}
            disabled={loading}
            required
            aria-label="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <div className="mt-4">
          <GoogleLogin
            clientId={googleClientId}  // Use googleClientId directly
            buttonText="Register with Google"
            onSuccess={handleGoogleLogin} // Change to onSuccess
            onFailure={handleGoogleLoginFailure}
            cookiePolicy={'single_host_origin'}
            className="w-full p-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
          />
        </div>
      </form>

      <p className="text-center mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;

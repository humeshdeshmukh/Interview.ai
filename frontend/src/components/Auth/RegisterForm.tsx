import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; 
import axiosInstance from '../../services/api';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<{ 
    email?: string; 
    password?: string; 
    confirmPassword?: string; 
    general?: string 
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
    const newErrors: { email?: string; password?: string; confirmPassword?: string } = {};

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Validate password length
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({}); // Reset error messages

    if (!validateForm()) return;

    try {
      setLoading(true);

      // API request to register the user
      const response = await axiosInstance.post('/auth/register', {
        email: formData.email,
        password: formData.password,
      });

      // Handle response based on API feedback
      if (response.status === 201) {
        // Optional: Use context-based registration if applicable
        if (register) {
          await register(formData.email, formData.password);
        }
        // Redirect to login page after successful registration
        navigate('/login');
      } else {
        setErrors({ general: response.data.message || 'Registration failed. Please try again.' });
      }
    } catch (error: any) {
      console.error('Registration error:', error);

      // More detailed error handling
      if (error.response) {
        console.error('Server responded with:', error.response.data);
        setErrors({ general: error.response.data?.message || 'Registration failed. Please try again.' });
      } else if (error.request) {
        console.error('Request made, but no response:', error.request);
        setErrors({ general: 'Server did not respond. Please try again later.' });
      } else if (error.message === 'Network Error') {
        // Check for network errors
        setErrors({ general: 'Network error. Please check your internet connection.' });
      } else if (error.message.includes('ECONNREFUSED')) {
        // Handle database connection errors
        setErrors({ general: 'Database connection error. Please try again later.' });
      } else {
        console.error('Error:', error.message);
        setErrors({ general: 'An unexpected error occurred. Please try again.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg"
      >
        {errors.general && (
          <div className="text-red-500 mb-4 p-2 bg-red-100 rounded">
            {errors.general}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
            disabled={loading}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
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
          />
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

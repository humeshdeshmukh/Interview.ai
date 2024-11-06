import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axiosInstance from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordStrengthBar from 'react-password-strength-bar';
import './RegisterForm.css'; // Import the CSS file

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: any = {};
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

    if (otpSent && formData.otp.length === 0) {
      newErrors.otp = 'OTP is required for verification.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendOTP = async () => {
    if (!validateForm()) return;

    try {
      const response = await axiosInstance.post('/auth/send-otp', {
        identifier: formData.identifier,
      });

      if (response.status === 200) {
        setOtpSent(true);
        toast.success('OTP sent to your phone!');
      }
    } catch (error: any) {
      toast.error('Failed to send OTP. Please try again.');
    }
  };

  const verifyOTP = async () => {
    if (!validateForm()) return;

    try {
      const response = await axiosInstance.post('/auth/verify-otp', {
        identifier: formData.identifier,
        otp: formData.otp,
      });

      if (response.status === 200) {
        toast.success('OTP verified successfully! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error: any) {
      toast.error('Invalid OTP. Please try again.');
    }
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
        const errorMessage = error.response.data?.message || 'Registration failed. Please try again.';
        toast.error(errorMessage);
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGitHubLogin = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/github`; // Redirect to your backend's GitHub auth route
  };

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

        <div className="mb-4">
          <label htmlFor="otp" className="block text-gray-700 mb-2">
            OTP (if applicable):
          </label>
          <input
            type="text"
            id="otp"
            value={formData.otp}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.otp ? 'border-red-500' : 'border-gray-300'} rounded`}
            disabled={loading}
            placeholder="Enter OTP sent to your phone"
            aria-label="OTP"
          />
          {errors.otp && <p className="text-red-500 text-sm mt-2">{errors.otp}</p>}
        </div>

        <button
          type="button"
          onClick={sendOTP}
          className={`w-full p-3 bg-blue-400 text-white rounded hover:bg-blue-500 transition mb-4 ${loading ? 'opacity-50' : ''}`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send OTP'}
        </button>

        <button
          type="button"
          onClick={verifyOTP}
          className={`w-full p-3 bg-green-400 text-white rounded hover:bg-green-500 transition mb-4 ${loading ? 'opacity-50' : ''}`}
          disabled={loading || !otpSent}
        >
          {loading ? 'Verifying...' : 'Verify OTP'}
        </button>

        <button
          type="submit"
          className={`w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition ${loading ? 'opacity-50' : ''}`}
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <button
          type="button"
          onClick={handleGitHubLogin}
          className={`w-full p-3 bg-gray-800 text-white rounded hover:bg-gray-900 transition mb-4`}
        >
          Login with GitHub
        </button>

        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;

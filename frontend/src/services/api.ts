import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your actual API base URL

// Create an instance of axios with default settings
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Ensure you're storing your token correctly

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access - redirecting to login');
      // Add logic to handle the unauthorized state, like redirecting to login
    } else {
      console.error('API request error:', error);
    }

    return Promise.reject(error);
  }
);

export default api;

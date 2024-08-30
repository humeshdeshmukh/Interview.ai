import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = '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'; // Replace with your API base URL

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
    // Get the token from local storage or a state management solution
    const token = localStorage.getItem('authToken'); // Replace with your token retrieval logic

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
    // Handle errors globally
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      console.error('Unauthorized access - redirecting to login');
      // Redirect to login or handle unauthorized state
    } else {
      console.error('API request error:', error);
    }

    return Promise.reject(error);
  }
);

export default api;

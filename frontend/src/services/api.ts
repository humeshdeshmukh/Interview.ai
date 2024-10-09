// import axios from 'axios';

// // Define the base URL for the API
// const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your actual API base URL

// // Create an instance of axios with default settings
// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Request interceptor to add auth token to headers
// api.interceptors.request.use(
//   (config) => {
//     // Get the token from local storage or a state management solution
//     const token = localStorage.getItem('authToken'); // Replace with your token retrieval logic

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor to handle errors globally
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Handle errors globally
//     if (error.response && error.response.status === 401) {
//       // Handle unauthorized errors (e.g., redirect to login)
//       console.error('Unauthorized access - redirecting to login');
//       // Add logic to handle the unauthorized state, like redirecting to login
//     } else {
//       console.error('API request error:', error);
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;


import axios from 'axios';

// Set up the base URL for the backend
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

// Add interceptors if needed for handling tokens (e.g., for authentication)
API.interceptors.request.use((config) => {
  // If you have tokens for authorization, add them to headers
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Make sure this matches your server
});

export default axiosInstance;

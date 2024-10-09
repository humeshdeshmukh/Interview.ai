import API from './api';

// User login
export const login = async (email: string, password: string) => {
  const response = await API.post('/auth/login', { email, password });
  return response.data;
};

// User registration
export const register = async (userData: any) => {
  const response = await API.post('/auth/register', userData);
  return response.data;
};

// Fetch user profile
export const getUserProfile = async () => {
  const response = await API.get('/users/profile');
  return response.data;
};

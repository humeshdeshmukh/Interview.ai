import axios from 'axios';

// Define the base URL for the API
const API_BASE_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions'; // Replace with your API base URL

// Define interfaces for your data models
export interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}

export interface LoginResponse {
  token: string;
}

// User login
export const login = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_BASE_URL}/auth/login`, {
      username,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// User registration
export const register = async (username: string, email: string, password: string): Promise<User> => {
  try {
    const response = await axios.post<User>(`${API_BASE_URL}/auth/register`, {
      username,
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Get user profile
export const getUserProfile = async (token: string): Promise<User> => {
  try {
    const response = await axios.get<User>(`${API_BASE_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (token: string, updatedProfile: Partial<User>): Promise<User> => {
  try {
    const response = await axios.put<User>(`${API_BASE_URL}/auth/profile`, updatedProfile, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Logout user
export const logout = async (): Promise<void> => {
  try {
    await axios.post(`${API_BASE_URL}/auth/logout`);
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

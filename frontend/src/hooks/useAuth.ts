import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { loginUser, logoutUser, selectAuthState } from '../features/authSlice';

interface AuthResponse {
  user: any; // Define your user type
  token: string;
}

const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const authState = useSelector((state: RootState) => selectAuthState(state));
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Check if there is a token in local storage and validate it
    const token = localStorage.getItem('authToken');
    if (token) {
      // Validate token and fetch user data if needed
      dispatch(loginUser(token));
    }
  }, [dispatch]);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      // Perform login request
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data: AuthResponse = await response.json();
      localStorage.setItem('authToken', data.token);
      dispatch(loginUser(data.token));
      setLoading(false);
    } catch (error) {
      console.error('Login failed:', error);
      setLoading(false);
    }
  }, [dispatch]);

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    dispatch(logoutUser());
  }, [dispatch]);

  return {
    isAuthenticated: !!authState.user,
    user: authState.user,
    loading,
    login,
    logout,
  };
};

export default useAuth;

import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';

const AuthContext = createContext<any>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Replace `any` with your user type

  const register = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
        { email, password },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
          }
        }
      );
      setUser(response.data.user);
    } catch (error) {
      console.error('Error registering:', error);
      throw new Error('Failed to register');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };

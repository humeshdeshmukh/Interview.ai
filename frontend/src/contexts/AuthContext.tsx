import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for authentication context
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

// Define the type for user
interface User {
  email: string;
  // Add other user properties if needed
}

// Default values for the context
const defaultAuthContext: AuthContextType = {
  user: null,
  login: async () => {},
  logout: async () => {},
  isAuthenticated: false,
};

// Create the AuthContext
const AuthContext = createContext<AuthContextType>(defaultAuthContext);

// Create a custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};

// Define the type for AuthProvider props
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component to provide context values
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<void> => {
    // Replace with your actual authentication logic
    try {
      // Simulate authentication
      // Example: call an API to authenticate and get user data
      // const response = await api.login(email, password);
      // setUser(response.user);
      
      // For demonstration, just setting a static user
      setUser({ email });
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed');
    }
  };

  const logout = async (): Promise<void> => {
    // Replace with your actual logout logic
    try {
      // Example: call an API to log out
      // await api.logout();
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      throw new Error('Logout failed');
    }
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

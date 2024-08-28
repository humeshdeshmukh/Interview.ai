import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for user data
interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties if needed
}

// Define the type for user context
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  updateUser: (user: Partial<User>) => void;
}

// Default values for the context
const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},
  updateUser: () => {},
};

// Create the UserContext
const UserContext = createContext<UserContextType>(defaultUserContext);

// Create a custom hook to use the UserContext
export const useUser = (): UserContextType => {
  return useContext(UserContext);
};

// Define the type for UserProvider props
interface UserProviderProps {
  children: ReactNode;
}

// UserProvider component to provide context values
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (updatedUser: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updatedUser });
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

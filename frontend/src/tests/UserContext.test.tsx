import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { UserContextProvider, UserContext } from '../contexts/UserContext'; // Adjust the import path
import userEvent from '@testing-library/user-event';

// Mock component to test UserContext
const TestComponent: React.FC = () => {
  const { user, setUser } = React.useContext(UserContext);

  return (
    <div>
      <p>User: {user ? user.name : 'No user'}</p>
      <button onClick={() => setUser({ name: 'John Doe' })}>Set User</button>
    </div>
  );
};

describe('UserContext', () => {
  test('should provide default user context values', () => {
    // Arrange
    render(
      <UserContextProvider>
        <TestComponent />
      </UserContextProvider>
    );

    // Assert
    expect(screen.getByText('User: No user')).toBeInTheDocument();
  });

  test('should update user context value when setUser is called', () => {
    // Arrange
    render(
      <UserContextProvider>
        <TestComponent />
      </UserContextProvider>
    );

    // Act
    userEvent.click(screen.getByText('Set User'));

    // Assert
    expect(screen.getByText('User: John Doe')).toBeInTheDocument();
  });

  // Add more tests as needed based on your UserContext functionality
});

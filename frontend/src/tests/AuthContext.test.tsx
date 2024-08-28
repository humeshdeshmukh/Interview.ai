import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthProvider, AuthContext } from '../contexts/AuthContext'; // Adjust the import path based on your file structure
import '@testing-library/jest-dom/extend-expect';

// Example component to test the AuthContext
const TestComponent: React.FC = () => {
  const { state, dispatch } = React.useContext(AuthContext);

  return (
    <div>
      <p data-testid="auth-status">User is {state.isAuthenticated ? 'authenticated' : 'not authenticated'}</p>
      <button onClick={() => dispatch({ type: 'LOGIN' })}>Login</button>
      <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
    </div>
  );
};

describe('AuthContext', () => {
  test('should initialize with default values', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByTestId('auth-status')).toHaveTextContent('User is not authenticated');
  });

  test('should change state on LOGIN action', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    fireEvent.click(screen.getByText('Login'));

    waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('User is authenticated');
    });
  });

  test('should change state on LOGOUT action', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    fireEvent.click(screen.getByText('Login'));
    waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('User is authenticated');
    });

    fireEvent.click(screen.getByText('Logout'));

    waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('User is not authenticated');
    });
  });
});

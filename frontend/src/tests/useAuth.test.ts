import { renderHook, act } from '@testing-library/react-hooks';
import { useAuth } from '../hooks/useAuth'; // Adjust the import path based on your file structure
import * as authService from '../services/auth'; // Import authService if needed for mocking

// Mock the authService methods
jest.mock('../services/auth', () => ({
  login: jest.fn(),
  logout: jest.fn(),
  getUser: jest.fn(),
}));

describe('useAuth Hook', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  test('should initialize with default state', () => {
    // Arrange
    const { result } = renderHook(() => useAuth());

    // Assert
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBe(null);
  });

  test('should handle login correctly', async () => {
    // Arrange
    const mockUser = { id: 1, name: 'John Doe' };
    const loginMock = authService.login as jest.Mock;
    loginMock.mockResolvedValue(mockUser);

    const { result } = renderHook(() => useAuth());

    // Act
    await act(async () => {
      await result.current.login('username', 'password');
    });

    // Assert
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.user).toEqual(mockUser);
  });

  test('should handle logout correctly', async () => {
    // Arrange
    const mockUser = { id: 1, name: 'John Doe' };
    const loginMock = authService.login as jest.Mock;
    loginMock.mockResolvedValue(mockUser);

    const { result } = renderHook(() => useAuth());

    // Act
    await act(async () => {
      await result.current.login('username', 'password');
      await result.current.logout();
    });

    // Assert
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBe(null);
  });

  // Add more tests as needed based on your useAuth.ts functionality
});

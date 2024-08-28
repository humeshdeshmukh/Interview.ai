import { createTheme } from '@mui/material/styles';

// Define your theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#0056b3',  // Primary color
    },
    secondary: {
      main: '#6c757d',  // Secondary color
    },
    success: {
      main: '#28a745',
    },
    error: {
      main: '#dc3545',
    },
    warning: {
      main: '#ffc107',
    },
    info: {
      main: '#17a2b8',
    },
    background: {
      default: '#f8f9fa', // Background color
    },
    text: {
      primary: '#343a40', // Primary text color
      secondary: '#6c757d', // Secondary text color
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  spacing: 8, // Base spacing unit
  shape: {
    borderRadius: 4, // Default border radius
  },
  shadows: [
    'none',
    '0px 1px 3px rgba(0, 0, 0, 0.2)',
    '0px 1px 5px rgba(0, 0, 0, 0.15)',
    '0px 1px 10px rgba(0, 0, 0, 0.1)',
    // More shadow levels if needed
  ],
});

export default theme;

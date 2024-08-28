import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/AuthContext'; // Ensure this path is correct
import { UserProvider } from './contexts/UserContext'; // Ensure this path is correct
import { ThemeProvider } from '@mui/material/styles'; // Import MUI ThemeProvider if using MUI
import { CssBaseline } from '@mui/material'; // Import CssBaseline for MUI global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling
import './index.css'; // Import your global styles if any
import theme from './styles/theme'; // Import your MUI theme if using MUI

// Use `createRoot` for React 18
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Apply MUI theme */}
      <CssBaseline /> {/* Apply MUI global styles */}
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

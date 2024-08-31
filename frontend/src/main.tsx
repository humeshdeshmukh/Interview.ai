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

// Optional: Import and configure performance monitoring (e.g., Sentry, LogRocket)
// import * as Sentry from '@sentry/react';
// import { Integrations } from '@sentry/tracing';
// Sentry.init({
//   dsn: 'YOUR_SENTRY_DSN',
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0,
// });

// Optional: Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to an error reporting service if configured
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Uncomment and configure the service as needed
    // Sentry.captureException(error);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-message">Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

// Use `createRoot` for React 18
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Apply MUI theme */}
      <CssBaseline /> {/* Apply MUI global styles */}
      <ErrorBoundary>
        <AuthProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </AuthProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);

// Optional: Measure performance (e.g., using web vitals)
// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);

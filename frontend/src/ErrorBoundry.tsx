// components/ErrorBoundary.tsx
import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log the error to the console or an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Optional: Log error details to an external service
    // Uncomment and configure if needed
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI in case of an error
      return (
        <div role="alert">
          <h1>Something went wrong.</h1>
          <p>Please try again later.</p>
        </div>
      );
    }

    // Render children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;

import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { AuthProvider } from './contexts/AuthContext';
import Chatbot from './components/Chatbot/Chatbot';

// Lazy loading for better performance
const Homepage = lazy(() => import('./components/Home/Homepage'));
const ResumeBuilder = lazy(() => import('./components/Home/ResumeBuilder'));
const InterviewQuestions = lazy(() => import('./components/Home/InterviewQuestions'));
const PracticeTests = lazy(() => import('./components/Home/PracticeTests'));
const MockInterview = lazy(() => import('./components/Layout/MockInterview/MockInterview'));
const Resources = lazy(() => import('./components/Home/Resources'));
const UserProfile = lazy(() => import('./components/Home/UserProfile'));
const RegisterForm = lazy(() => import('./components/Auth/RegisterForm'));
const LoginForm = lazy(() => import('./components/Auth/LoginForm'));
const NotFound = lazy(() => import('./components/NotFound'));

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-message">Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

const AppRoutes: React.FC = () => (
  <Suspense fallback={<div className="loading">Loading...</div>}>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/resume" element={<ResumeBuilder />} />
      <Route path="/questions" element={<InterviewQuestions />} />
      <Route path="/practice-tests" element={<PracticeTests />} />
      <Route path="/mock-interview" element={<MockInterview />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/profile" element={<UserProfile name="" email="" profilePicture="" />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <AuthProvider>
      <Router>
        <ErrorBoundary>
          <Header onToggleSidebar={handleToggleSidebar} />
          <main className="main-content">
            <AppRoutes />
          </main>
          <Footer />
          <Chatbot /> {/* Chatbot will float on the bottom right corner */}
        </ErrorBoundary>
      </Router>
    </AuthProvider>
  );
};

export default App;

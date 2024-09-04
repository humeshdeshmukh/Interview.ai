import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { AuthProvider } from './contexts/AuthContext';
import Chatbot from './components/Chatbot/Chatbot';
import MockInterview from './components/MockInterview/MockInterview';
import ForgotPassword from './components/Auth/ForgotPassword'; // Adjust the path as needed

// Lazy loading for better performance
const Homepage = lazy(() => import('./components/Home/Homepage'));
const ResumeBuilder = lazy(() => import('./components/Home/ResumeBuilder'));
const InterviewQuestions = lazy(() => import('./components/Home/InterviewQuestions'));
const PracticeTests = lazy(() => import('./components/Home/PracticeTests'));
//const MockInterview = lazy(() => import('./components/MockInterview/MockInterview'));
const Resources = lazy(() => import('./components/Home/Resources'));
const UserProfile = lazy(() => import('./components/Home/UserProfile'));
const RegisterForm = lazy(() => import('./components/Auth/RegisterForm'));
const LoginForm = lazy(() => import('./components/Auth/LoginForm'));
const NotFound = lazy(() => import('./components/NotFound'));

// Additional pages
const Blog = lazy(() => import('./components/pages/Blog'));
const Webinars = lazy(() => import('./components/pages/Webinars'));
const Ebooks = lazy(() => import('./components/pages/Ebooks'));
const CaseStudies = lazy(() => import('./components/pages/CaseStudies'));
const Guides = lazy(() => import('./components/pages/Guides'));
const Templates = lazy(() => import('./components/pages/Templates'));
const Tools = lazy(() => import('./components/pages/Tools'));
const FAQ = lazy(() => import('./components/pages/FAQ'));
const CustomerSupport = lazy(() => import('./components/pages/CustomerSupport'));
const Tutorials = lazy(() => import('./components/pages/Tutorials'));
const Contact = lazy(() => import('./components/pages/Contact'));
const Feedback = lazy(() => import('./components/pages/Feedback'));
const ReportIssue = lazy(() => import('./components/pages/ReportIssue'));
const LiveChat = lazy(() => import('./components/pages/LiveChat'));
const Company = lazy(() => import('./components/pages/Company'));
const Team = lazy(() => import('./components/pages/Team'));
const Careers = lazy(() => import('./components/pages/Careers'));
const Press = lazy(() => import('./components/pages/Press'));
const Partners = lazy(() => import('./components/pages/Partners'));
const ActivityLog = lazy(() => import('./components/pages/ActivityLog'));
const Subscriptions = lazy(() => import('./components/pages/Subscriptions'));

// Error Boundary Component
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
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
      <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add this route */}

      {/* Additional pages */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/webinars" element={<Webinars />} />
      <Route path="/ebooks" element={<Ebooks />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/customer-support" element={<CustomerSupport />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/report-issue" element={<ReportIssue />} />
      <Route path="/live-chat" element={<LiveChat />} />
      <Route path="/company" element={<Company />} />
      <Route path="/team" element={<Team />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/press" element={<Press />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/activity-log" element={<ActivityLog />} />
      <Route path="/subscriptions" element={<Subscriptions />} />

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

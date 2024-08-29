import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Home/HeroSection';
import ResumeBuilder from './components/Home/ResumeBuilder';
import InterviewQuestions from './components/Home/InterviewQuestions';
import PracticeTests from './components/Home/PracticeTests';
import MockInterview from './components/Layout/MockInterview/MockInterview';
import Resources from './components/Home/Resources';
import NotFound from './components/NotFound';
import RegisterForm from './components/Auth/RegisterForm';
import LoginForm from './components/Auth/LoginForm';
import UserProfile from './components/Home/UserProfile';
import { AuthProvider } from './contexts/AuthContext';
import Chatbot from './components/Chatbot/Chatbot';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HeroSection />} />
    <Route path="/resume" element={<ResumeBuilder />} />
    <Route path="/questions" element={<InterviewQuestions />} />
    <Route path="/practice-tests" element={<PracticeTests />} />
    <Route path="/mock-interview" element={<MockInterview />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/profile" element={<UserProfile />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <AuthProvider>
      <Router>
        <Header onToggleSidebar={handleToggleSidebar} />
        <main className="main-content">
          <AppRoutes />
        </main>
        <Footer />
        <Chatbot /> {/* Chatbot will float on the bottom right corner */}
      </Router>
    </AuthProvider>
  );
};

export default App;

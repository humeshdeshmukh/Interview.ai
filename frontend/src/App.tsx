import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import HeroSection from './components/Home/HeroSection'; // Ensure the file exists
import ResumeBuilder from './components/Home/ResumeBuilder'; // Ensure the file exists
import InterviewQuestions from './components/Home/InterviewQuestions';
// Ensure the file exists
//import PracticeTests from './components/Home/PracticeTests'; // Ensure the file exists
import MockInterview from './components/MockInterview/MockInterview';
 // Ensure the file exists
import Resources from './components/Home/Resources'; // Ensure the file exists
import NotFound from './components/NotFound'; // Ensure this component exists

const App: React.FC = () => {
  // State for dynamic content
  const [showMore, setShowMore] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/resume" element={<ResumeBuilder />} />
        <Route path="/questions" element={<InterviewQuestions />} />
        <Route path="/mock-interview" element={<MockInterview />} />
        <Route path="/resources" element={<Resources />} />
        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import HeroSection from './components/Home/HeroSection'; // Ensure the file exists

const App = () => {
  // State for dynamic content
  const [showMore, setShowMore] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import Tailwind CSS and other global styles
import Header from './components/Layout/Header'; // Import Header component
import Footer from './components/Layout/Footer'; // Import Footer component
import HeroSection from './components/Home/HeroSection'; // Import HeroSection component
import MainLayout from './components/Layout/MainLayout'; // Import MainLayout component

const App = () => {
  // State for dynamic content
  const [showMore, setShowMore] = useState(false);

  // Function to toggle content
  const toggleContent = () => setShowMore(!showMore);

  return (
    <MainLayout>
      <Header />
      <main className="flex-grow p-4 container mx-auto">
        <HeroSection /> {/* Include HeroSection component */}
        <h2 className="text-xl md:text-2xl font-semibold mt-6">Welcome to InterviewMaster.ai</h2>
        <p className="mt-2 text-base md:text-lg">
          This is a dynamic React application using Bootstrap and Tailwind CSS for styling.
        </p>
        <button className="btn btn-primary mt-4" onClick={toggleContent}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        {showMore && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Additional Information</h3>
            <p>
              Here is some more content that is dynamically shown when the button is clicked.
              You can add more details or features here as needed.
            </p>
          </div>
        )}
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <button className="btn btn-primary">Bootstrap Button</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Tailwind Button</button>
        </div>
      </main>
      <Footer /> {/* Include Footer component */}
    </MainLayout>
  );
}

export default App;

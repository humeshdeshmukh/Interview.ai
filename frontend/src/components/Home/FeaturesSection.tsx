import React from 'react';
import './features.css';

const features = [
  {
    title: 'AI-Powered Chatbot',
    description:
      'Engage with our advanced AI chatbot to practice common interview questions and receive instant feedback on your responses.',
  },
  {
    title: 'Comprehensive Question Database',
    description:
      'Access a vast repository of interview questions tailored to various industries, helping you prepare effectively for your upcoming interviews.',
  },
  {
    title: 'Mock Interviews',
    description:
      'Simulate real interview experiences with our mock interview feature, designed to enhance your confidence and reduce interview anxiety.',
  },
  {
    title: 'Resource Library',
    description:
      'Explore a collection of articles and tips on interview techniques, body language, and communication skills to sharpen your interviewing prowess.',
  },
  {
    title: 'User Profiles and Progress Tracking',
    description:
      'Create personalized profiles to track your progress, save your favorite questions, and receive tailored recommendations for your preparation.',
  },
  {
    title: 'Performance Analytics',
    description:
      'Gain insights into your interview performance with analytics that highlight your strengths and areas for improvement.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-10 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

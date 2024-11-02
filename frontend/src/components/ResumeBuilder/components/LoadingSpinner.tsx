import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <span>Loading...</span>
    </div>
  );
};

export default LoadingSpinner;

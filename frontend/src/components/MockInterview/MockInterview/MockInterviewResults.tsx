// src/components/MockInterview/MockInterviewResults.tsx
import React from 'react';
import { MockInterviewResultsProps } from '../types';

const MockInterviewResults: React.FC<MockInterviewResultsProps> = () => {
  return (
    <div className="mock-interview-results">
      <h2>Interview Results</h2>
      <p>Your performance details will be displayed here.</p>
    </div>
  );
};

export default MockInterviewResults;

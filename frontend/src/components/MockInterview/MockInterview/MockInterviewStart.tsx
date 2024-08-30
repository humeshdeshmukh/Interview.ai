// src/components/MockInterview/MockInterviewStart.tsx
import React from 'react';
import { MockInterviewStartProps } from '../types';

const MockInterviewStart: React.FC<MockInterviewStartProps> = ({ onStart }) => {
  return (
    <div className="mock-interview-start">
      <h1>Welcome to the Mock Interview</h1>
      <button onClick={onStart}>Start Interview</button>
    </div>
  );
};

export default MockInterviewStart;

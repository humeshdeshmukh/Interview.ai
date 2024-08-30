// src/components/MockInterview/MockInterviewSession.tsx
import React from 'react';
import { MockInterviewSessionProps } from '../types';

const MockInterviewSession: React.FC<MockInterviewSessionProps> = ({ onComplete }) => {
  return (
    <div className="mock-interview-session">
      <h2>Interview in Progress</h2>
      <button onClick={onComplete}>Complete Interview</button>
    </div>
  );
};

export default MockInterviewSession;

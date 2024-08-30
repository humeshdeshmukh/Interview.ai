import React from 'react';
import '../styles/MockInterviewStart.css'; // Import custom styling

interface Props {
  onStart: () => void;
}

const MockInterviewStart: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="mock-interview-start">
      <h2>Start Your Mock Interview</h2>
      <p>Prepare to begin your mock interview by clicking the button below. Make sure you are in a quiet environment and ready to answer some questions!</p>
      <button onClick={onStart} className="btn-start">Start Interview</button>
    </div>
  );
};

export default MockInterviewStart;

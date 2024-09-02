// src/components/MockInterview/MockInterview.tsx
import React, { useState } from 'react';
import MockInterviewStart from './components/MockInterviewStart';
import MockInterviewSession from './components/MockInterviewSession';
import MockInterviewResults from './components/MockInterviewResults';
import Timer from './components/Timer';
import SpeechRecognition from './components/SpeechRecognition';
import AIChatbot from './components/AIChatbot';
import UserProfile from './components/UserProfile';
import VideoRecorder from './components/VideoRecorder';
import './styles/MockInterview.css'; // Import the CSS file

const MockInterview: React.FC = () => {
  const [stage, setStage] = useState<'start' | 'session' | 'results'>('start');

  const handleStageChange = (newStage: 'start' | 'session' | 'results') => {
    setStage(newStage);
  };

  return (
    <div className="mock-interview">
      <Timer />
      <SpeechRecognition />
      <UserProfile />
      <VideoRecorder />
      {stage === 'start' && <MockInterviewStart onStart={() => handleStageChange('session')} />}
      {stage === 'session' && <MockInterviewSession onComplete={() => handleStageChange('results')} />}
      {stage === 'results' && <MockInterviewResults />}
    </div>
  );
};

export default MockInterview;

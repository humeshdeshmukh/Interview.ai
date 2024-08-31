import React, { useState } from 'react';
import MockInterviewStart from './components/MockInterviewStart';
import MockInterviewSession from './components/MockInterviewSession';
import MockInterviewResults from './components/MockInterviewResults';
import Timer from './components/Timer';
import SpeechRecognition from './components/SpeechRecognition';
import AIChatbot from './components/AIChatbot';
//import UserProfile from './components/UserProfile';
import VideoRecorder from './components/VideoRecorder';
import { Container, Row, Col } from 'react-bootstrap';
import './MockInterview.css';

const MockInterview: React.FC = () => {
  const [stage, setStage] = useState<'start' | 'session' | 'results'>('start');

  const handleStageChange = (newStage: 'start' | 'session' | 'results') => {
    setStage(newStage);
  };

  return (
    <Container className="mock-interview">
      <Row className="justify-content-center mb-4">
        <Col md={12} lg={8}>
          <Timer />
          <SpeechRecognition />
          
          <VideoRecorder />
          <AIChatbot />
          {stage === 'start' && <MockInterviewStart onStart={() => handleStageChange('session')} />}
          {stage === 'session' && <MockInterviewSession onComplete={() => handleStageChange('results')} />}
          {stage === 'results' && <MockInterviewResults />}
        </Col>
      </Row>
    </Container>
  );
};

export default MockInterview;

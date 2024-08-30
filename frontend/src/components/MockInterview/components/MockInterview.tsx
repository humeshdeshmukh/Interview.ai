import React, { useState } from 'react';
import MockInterviewStart from './MockInterviewStart';
import MockInterviewSession from './MockInterviewSession';
import MockInterviewResults from './MockInterviewResults';
import Timer from './Timer';
import SpeechRecognition from './SpeechRecognition';
import AIChatbot from './AIChatbot';
import VideoRecorder from './VideoRecorder';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/MockInterview.css'; // Import the CSS file for custom styling

const MockInterview: React.FC = () => {
  const [stage, setStage] = useState<'start' | 'session' | 'results'>('start');
  const [isChatbotExpanded, setIsChatbotExpanded] = useState<boolean>(false);

  const handleStageChange = (newStage: 'start' | 'session' | 'results') => {
    setStage(newStage);
  };

  const toggleChatbot = () => {
    setIsChatbotExpanded(prev => !prev);
  };

  return (
    <Container className="mock-interview-container">
      <Row className="timer-row">
        <Col xs={12}>
          <Timer />
        </Col>
      </Row>
      <Row className="main-content-row">
        <Col xs={12} md={6} className="video-recorder-wrapper">
          <VideoRecorder />
        </Col>
        <Col xs={12} md={6} className="interview-session-wrapper">
          {stage === 'start' && (
            <MockInterviewStart onStart={() => handleStageChange('session')} />
          )}
          {stage === 'session' && (
            <MockInterviewSession onComplete={() => handleStageChange('results')} />
          )}
          {stage === 'results' && <MockInterviewResults />}
        </Col>
      </Row>
      <Row className="chatbot-row">
        <Col xs={12}>
          <div className={`ai-chatbot-wrapper ${isChatbotExpanded ? 'expanded' : ''}`}>
            <button className="btn-toggle-chatbot" onClick={toggleChatbot}>
              {isChatbotExpanded ? 'Hide Chatbot' : 'Show Chatbot'}
            </button>
            <AIChatbot />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MockInterview;

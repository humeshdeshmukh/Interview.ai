import React, { useState, useRef, useEffect } from 'react';
import { Button, Form, Modal, Card, Spinner, Container, Dropdown } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Question } from './types';
import questions from './questions.json';

const MockInterview: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [interviewMode, setInterviewMode] = useState('Text Practice');
  const [isRecording, setIsRecording] = useState(false);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [timer, setTimer] = useState<number>(60);
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    if (showTimer) {
      const intervalRef = setInterval(() => {
        setTimer((prev) => (prev <= 0 ? 0 : prev - 1));
      }, 1000);
      return () => clearInterval(intervalRef);
    }
  }, [showTimer]);

  const handleModeSelect = (mode: string) => {
    setInterviewMode(mode);
    setShowTimer(mode !== 'Text Practice');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
  };

  const handleAnswerSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const aiResponse = simulateAIResponse(userAnswer, filteredQuestions[currentQuestionIndex].answer);
      setFeedback(aiResponse);
      setIsSubmitting(false);
      setShowModal(true);
    }, 2000);
  };

  const handleNextQuestion = () => {
    setShowModal(false);
    setUserAnswer('');
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('You have completed the mock interview!');
    }
  };

  const handlePreviousQuestion = () => {
    setShowModal(false);
    setUserAnswer('');
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSkipQuestion = () => {
    setUserAnswer('');
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const simulateAIResponse = (userInput: string, correctAnswer: string) => {
    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
      return 'Correct! You have a good understanding of the concept.';
    } else {
      return userInput.length < 10 ? 'Your answer is too short. Try to elaborate.' : `Not right. Correct answer: ${correctAnswer}`;
    }
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) videoRef.current.srcObject = stream;
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (e) => {
      if (e.data.size > 0) recordedChunksRef.current.push(e.data);
    };
    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
      setVideoURL(URL.createObjectURL(blob));
    };
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const deleteRecording = () => setVideoURL(null);

  const filteredQuestions = selectedCategory === 'All'
    ? questions
    : questions.filter(q => q.category === selectedCategory);

  return (
    <Container className="mock-interview-container mt-5">
      <Card>
        <Card.Body>
          <h4>Mock Interview</h4>

          <Dropdown onSelect={handleModeSelect}>
            <Dropdown.Toggle variant="success">{interviewMode}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Text Practice">Text Practice</Dropdown.Item>
              <Dropdown.Item eventKey="Video Recording">Video Recording</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown onSelect={handleCategorySelect} className="mt-3">
            <Dropdown.Toggle variant="info">{selectedCategory}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="All">All Categories</Dropdown.Item>
              <Dropdown.Item eventKey="Technical">Technical</Dropdown.Item>
              <Dropdown.Item eventKey="Behavioral">Behavioral</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <p><strong>Question {currentQuestionIndex + 1}:</strong> {filteredQuestions[currentQuestionIndex].question}</p>

          {interviewMode === 'Text Practice' && (
            <Form>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  disabled={isSubmitting}
                />
              </Form.Group>
              <Button onClick={handleAnswerSubmit} disabled={isSubmitting || !userAnswer.trim()}>
                {isSubmitting ? <Spinner animation="border" size="sm" /> : 'Submit Answer'}
              </Button>
            </Form>
          )}

          {interviewMode === 'Video Recording' && (
            <>
              <Button variant="danger" onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </Button>
              <Button variant="warning" onClick={deleteRecording} disabled={!videoURL}>Delete Recording</Button>
              {videoURL && <video controls width="100%" src={videoURL} />}
            </>
          )}

          <Button variant="secondary" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
            Previous Question
          </Button>
          <Button variant="primary" onClick={handleNextQuestion} disabled={currentQuestionIndex === filteredQuestions.length - 1}>
            Next Question
          </Button>

          <Dropdown className="mt-3">
            <Dropdown.Toggle variant="info">Select Question</Dropdown.Toggle>
            <Dropdown.Menu>
              {filteredQuestions.map((q, index) => (
                <Dropdown.Item key={index} eventKey={index} onSelect={() => setCurrentQuestionIndex(index)}>
                  {`Question ${index + 1}: ${q.question}`}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <CSSTransition in={showModal} timeout={300} classNames="modal" unmountOnExit>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Feedback</Modal.Title>
              </Modal.Header>
              <Modal.Body>{feedback}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleNextQuestion}>Next Question</Button>
                <Button variant="primary" onClick={handleSkipQuestion}>Skip Question</Button>
              </Modal.Footer>
            </Modal>
          </CSSTransition>

          {showTimer && <h5>Time Remaining: {timer}s</h5>}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MockInterview;

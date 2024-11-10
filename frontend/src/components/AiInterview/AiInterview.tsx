import React, { useState, useRef, useEffect } from 'react';
import { Container, Form, Button, ListGroup, Alert, ProgressBar, InputGroup, FormControl } from 'react-bootstrap';
import '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/face-landmarks-detection';
import './AiInterview.css';
import questionsData from './questions.json';

const AiInterview: React.FC = () => {
  const [questions, setQuestions] = useState<{ question: string, category: string }[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [responses, setResponses] = useState<{ question: string, answer: string, videoUrl?: string }[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isInterviewComplete, setIsInterviewComplete] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState<string>('');
  const [filter, setFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    setLoading(true);
    setQuestions(questionsData);
    setLoading(false);
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (userInput) {
        setFeedback(generateFeedback(userInput));
      }
    }, 1000);
    return () => clearTimeout(timerId);
  }, [userInput]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = {
      question: questions[currentQuestionIndex].question,
      answer: userInput,
      videoUrl,
    };
    setResponses(newResponses);
    setFeedback(null);
    setUserInput('');
    setVideoUrl(null);
    setRecordingStatus('');
  };

  const generateFeedback = (input: string): string => {
    return `AI Feedback: Your answer '${input}' is detailed and structured. Consider elaborating on key points.`;
  };

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true }); // Add audio: true here
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
        chunksRef.current = [];
      };
      mediaRecorderRef.current.start();
      setRecordingStatus('Recording...');
      setIsRecording(true);
    } else {
      alert("Unable to access camera or microphone. Please ensure permissions are granted.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
    setRecordingStatus('Stopped');
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserInput(responses[currentQuestionIndex + 1]?.answer || '');
      setVideoUrl(responses[currentQuestionIndex + 1]?.videoUrl || null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setUserInput(responses[currentQuestionIndex - 1]?.answer || '');
      setVideoUrl(responses[currentQuestionIndex - 1]?.videoUrl || null);
    }
  };

  const handleDeleteResponse = (index: number) => {
    const updatedResponses = responses.filter((_, i) => i !== index);
    setResponses(updatedResponses);
  };

  const filteredQuestions = questions.filter(question =>
    (selectedCategory === 'All' || question.category === selectedCategory) &&
    question.question.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container className="ai-interview-container">
      <div className="left-section">
        <h1>AI Interview</h1>
        {loading ? (
          <Alert variant="info">Loading questions...</Alert>
        ) : (
          <>
            <ProgressBar 
              now={(currentQuestionIndex / filteredQuestions.length) * 100}
              label={`${currentQuestionIndex + 1}/${filteredQuestions.length}`} 
              className="mb-4"
            />
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Filter questions"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </InputGroup>
            <Form.Group controlId="categorySelect" className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All</option>
                <option value="General">General</option>
                <option value="Behavioral">Behavioral</option>
                <option value="Motivational">Motivational</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="currentQuestion">
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="text"
                readOnly
                value={filteredQuestions[currentQuestionIndex]?.question || ''}
                className="mb-3"
              />
            </Form.Group>
            <Form.Group controlId="userInput">
              <Form.Label>Your Response</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type or record your response"
                value={userInput}
                onChange={handleInputChange}
                disabled={isRecording}
                className="mb-3"
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={isRecording}
              className="me-2"
            >
              {isInterviewComplete ? 'Finish Interview' : 'Submit Answer'}
            </Button>
            <Button
              variant={isRecording ? 'danger' : 'success'}
              onClick={isRecording ? stopRecording : startRecording}
              className="me-2"
            >
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Button>
            <Button variant="secondary" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
              Previous
            </Button>
            <Button variant="secondary" onClick={handleNextQuestion} disabled={currentQuestionIndex === filteredQuestions.length - 1}>
              Next
            </Button>
            {recordingStatus && <Alert variant={isRecording ? 'danger' : 'success'} className="mt-3">{recordingStatus}</Alert>}
          </>
        )}
      </div>
      <div className="right-section">
        <div className="video-section mt-4">
          <video ref={videoRef} autoPlay muted className="video-preview flip-video"></video>
        </div>
        {videoUrl && (
          <div className="mt-3">
            <h4>Recorded Video:</h4>
            <video src={videoUrl} controls className="recorded-video"></video>
          </div>
        )}
        <ListGroup className="mt-4">
          {responses.map((response, index) => (
            <ListGroup.Item key={index} className="response-item">
              <strong>Q:</strong> {response.question} <br />
              <strong>A:</strong> {response.answer}
              {response.videoUrl && (
                <div>
                  <strong>Video:</strong> <video src={response.videoUrl} controls className="response-video" />
                </div>
              )}
              <Button variant="danger" size="sm" onClick={() => handleDeleteResponse(index)} className="mt-2">
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      {isInterviewComplete && <Alert variant="success" className="mt-4">Interview complete! Great job!</Alert>}
    </Container>
  );
};

export default AiInterview;

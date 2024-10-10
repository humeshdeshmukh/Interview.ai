import React, { useState, useRef, useEffect } from 'react';
import { Container, Form, Button, ListGroup, Alert, ProgressBar, InputGroup, FormControl } from 'react-bootstrap';
import '@tensorflow/tfjs';
import * as facemesh from '@tensorflow-models/face-landmarks-detection';
import './AiInterview.css'; // Add your custom styles here

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
  const [faceLandmarks, setFaceLandmarks] = useState<any>(null);
  const [filter, setFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showQuestions, setShowQuestions] = useState(true);
  const [loading, setLoading] = useState(false); // For loading state

  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true); // Start loading
      // Here you would typically fetch questions from an API or load them from a file
      const importedQuestions = [
        { question: "Tell me about yourself.", category: "General" },
        { question: "What are your strengths and weaknesses?", category: "Behavioral" },
        { question: "Why do you want to work here?", category: "Motivational" },
        { question: "Describe a challenging situation you've faced and how you handled it.", category: "Behavioral" },
        { question: "Where do you see yourself in 5 years?", category: "Motivational" },
        // Add more questions as needed
      ];
      setQuestions(importedQuestions);
      setLoading(false); // Stop loading
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (userInput) {
        setFeedback(generateFeedback(userInput));
      }
    }, 1000);
    return () => clearTimeout(timerId);
  }, [userInput]);

  useEffect(() => {
    if (videoRef.current) {
      const runFaceDetection = async () => {
        const net = await facemesh.load(facemesh.SupportedPackages.mediapipeFacemesh);
        const detectFaceLandmarks = async () => {
          if (videoRef.current) {
            const predictions = await net.estimateFaces(videoRef.current, false);
            setFaceLandmarks(predictions);
          }
        };

        setInterval(detectFaceLandmarks, 1000);
      };

      runFaceDetection();
    }
  }, [videoRef]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    const newResponses = [...responses, { question: questions[currentQuestionIndex].question, answer: userInput || '', videoUrl }];
    setResponses(newResponses);
    setFeedback(null);
    setUserInput('');

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsInterviewComplete(true);
    }
  };

  const generateFeedback = (input: string): string => {
    return `AI Feedback: Your answer '${input}' is detailed and structured. Consider elaborating on key points.`;
  };

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
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
      alert("Unable to access camera. Please ensure camera permissions are granted.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
    setRecordingStatus('Stopped');
  };

  const filteredQuestions = questions.filter(question =>
    (selectedCategory === 'All' || question.category === selectedCategory) &&
    question.question.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container className="ai-interview-container">
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

          <Button 
            variant="secondary" 
            onClick={() => setShowQuestions(!showQuestions)} 
            className="mb-3"
          >
            {showQuestions ? 'Hide Questions' : 'Show Questions'}
          </Button>

          {showQuestions && (
            <div>
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
                  {/* Add more categories as needed */}
                </Form.Control>
              </Form.Group>
            </div>
          )}

          <div className="interview-form">
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

            {recordingStatus && <Alert variant={isRecording ? 'danger' : 'success'} className="mt-3">{recordingStatus}</Alert>}
          </div>

          <div className="video-section mt-4">
            <div className="video-wrapper">
              <video ref={videoRef} autoPlay muted className="video-preview"></video>
            </div>
            {videoUrl && (
              <div className="mt-3">
                <h4>Recorded Video:</h4>
                <video src={videoUrl} controls className="recorded-video"></video>
              </div>
            )}
          </div>

          <ListGroup className="mt-4">
            {responses.map((response, index) => (
              <ListGroup.Item key={index} className="response-item">
                <strong>Q:</strong> {response.question} <br />
                <strong>A:</strong> {response.answer}
                {response.videoUrl && (
                  <div>
                    <strong>Video:</strong>
                    <video src={response.videoUrl} controls className="recorded-video"></video>
                  </div>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>

          {feedback && <Alert variant="info" className="mt-3">{feedback}</Alert>}
        </>
      )}
    </Container>
  );
};

export default AiInterview;

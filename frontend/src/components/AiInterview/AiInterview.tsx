import React, { useState, useRef } from 'react';
import { Container, Form, Button, ListGroup, Alert } from 'react-bootstrap';
import './AiInterview.css'; // Add your custom styles here

const AiInterview: React.FC = () => {
  const questions = [
    "Tell me about yourself.",
    "What are your strengths and weaknesses?",
    "Why do you want to work here?",
    "Describe a challenging situation you've faced and how you handled it.",
    "Where do you see yourself in 5 years?"
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [responses, setResponses] = useState<{ question: string, answer: string, videoUrl?: string }[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isInterviewComplete, setIsInterviewComplete] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    if (currentQuestionIndex < questions.length) {
      const newResponses = [...responses, { question: questions[currentQuestionIndex], answer: userInput, videoUrl }];
      const aiFeedback = generateFeedback(userInput);

      setResponses(newResponses);
      setFeedback(aiFeedback);
      setUserInput('');
      setVideoUrl(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsInterviewComplete(true);
      }
    }
  };

  const generateFeedback = (input: string): string => {
    // Placeholder function for AI feedback
    // Replace with actual AI integration
    return `Feedback for your answer: ${input}`;
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
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  return (
    <Container className="ai-interview-container">
      <h1>AI Interview</h1>
      <Form>
        <Form.Group controlId="currentQuestion">
          <Form.Label>Question</Form.Label>
          <Form.Control
            type="text"
            readOnly
            value={questions[currentQuestionIndex]}
          />
        </Form.Group>
        <Form.Group controlId="userInput">
          <Form.Label>Your Response</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type your response here"
            value={userInput}
            onChange={handleInputChange}
            disabled={isRecording}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleSubmit}
          className="mt-3"
          disabled={isRecording}
        >
          {isInterviewComplete ? 'Finish Interview' : 'Submit Answer'}
        </Button>

        <Button
          variant={isRecording ? 'danger' : 'success'}
          onClick={isRecording ? stopRecording : startRecording}
          className="mt-3 ms-2"
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Button>
      </Form>

      <div className="mt-4">
        <video ref={videoRef} autoPlay muted className="video-preview"></video>
        {videoUrl && (
          <div>
            <h4>Recorded Video:</h4>
            <video src={videoUrl} controls className="recorded-video"></video>
          </div>
        )}
      </div>

      <ListGroup className="mt-4">
        {responses.map((response, index) => (
          <ListGroup.Item key={index}>
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

      {feedback && !isInterviewComplete && (
        <div className="mt-4">
          <h3>AI Feedback</h3>
          <p>{feedback}</p>
        </div>
      )}

      {isInterviewComplete && (
        <div className="mt-4">
                    <h3>Interview Complete</h3>
          <p>Thank you for completing the interview. You can review your responses above.</p>
        </div>
      )}
    </Container>
  );
};

export default AiInterview;


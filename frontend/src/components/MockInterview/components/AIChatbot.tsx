import React, { useState, useEffect, useRef } from 'react';
import '../styles/AIChatbot.css'; // Import custom styling

const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // List of predefined interview questions
  const interviewQuestions = [
    "Tell me about yourself.",
    "What are your strengths and weaknesses?",
    "Why do you want to work here?",
    "Describe a challenging situation you've faced and how you handled it.",
    "Where do you see yourself in 5 years?"
  ];

  // Index of the current question
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  useEffect(() => {
    if (questionIndex < interviewQuestions.length) {
      setMessages(prevMessages => [...prevMessages, `AI: ${interviewQuestions[questionIndex]}`]);
    }
  }, [questionIndex]);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages(prevMessages => [...prevMessages, `You: ${input}`]);
      setInput(''); // Clear input field
      // Move to next question
      if (questionIndex < interviewQuestions.length - 1) {
        setQuestionIndex(prevIndex => prevIndex + 1);
      } else {
        setMessages(prevMessages => [...prevMessages, `AI: That's all the questions for now.`]);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          const videoBlob = new Blob([event.data], { type: 'video/webm' });
          const url = URL.createObjectURL(videoBlob);
          setVideoUrl(url);
        }
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  return (
    <div className="ai-chatbot">
      <h3>AI Chatbot</h3>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((message, index) => (
            <div key={index} className="chat-message">
              {message}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Type your answer..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
        <div className="video-controls">
          <button onClick={startRecording} disabled={isRecording}>Start Recording</button>
          <button onClick={stopRecording} disabled={!isRecording}>Stop Recording</button>
          {videoUrl && (
            <div className="video-preview">
              <video src={videoUrl} controls ref={videoRef} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;

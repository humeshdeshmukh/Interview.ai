import React from 'react';
import './ChatbotMessage.css';

interface ChatbotMessageProps {
  role: 'user' | 'bot';
  message: string;
  timestamp: string;
}

const ChatbotMessage: React.FC<ChatbotMessageProps> = ({ role, message, timestamp }) => {
  return (
    <div className={`chatbot-message ${role}`}>
      <div className="chatbot-message-text">{message}</div>
      <div className="chatbot-message-timestamp">{timestamp}</div>
    </div>
  );
};

export default ChatbotMessage;

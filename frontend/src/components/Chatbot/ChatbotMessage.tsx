import React from 'react';
import { Col } from 'react-bootstrap';
import './ChatbotMessage.css'; // Import your custom CSS if needed

interface ChatbotMessageProps {
  sender: 'user' | 'bot'; // Sender can be 'user' or 'bot'
  message: string;
  timestamp?: string; // Optional timestamp for when the message was sent
}

const ChatbotMessage: React.FC<ChatbotMessageProps> = ({ sender, message, timestamp }) => {
  return (
    <Col md={12} className={`chatbot-message ${sender}`}>
      <div className={`message-container ${sender}`}>
        <div className="avatar">
          {sender === 'user' ? '👤' : '🤖'}
        </div>
        <div className={`message-bubble ${sender}`}>
          {message}
        </div>
        {timestamp && (
          <div className="message-timestamp">
            {timestamp}
          </div>
        )}
      </div>
    </Col>
  );
};

export default ChatbotMessage;

import React from 'react';
import { Col } from 'react-bootstrap';
import './ChatbotMessage.css'; // Import your custom CSS if needed

interface ChatbotMessageProps {
  sender: 'user' | 'bot'; // Sender can be 'user' or 'bot'
  message: string;
}

const ChatbotMessage: React.FC<ChatbotMessageProps> = ({ sender, message }) => {
  return (
    <Col md={12} className={`chatbot-message ${sender}`}>
      <div className={`message-bubble ${sender}`}>
        {message}
      </div>
    </Col>
  );
};

export default ChatbotMessage;

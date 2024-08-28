import React, { useState } from 'react';
import ChatbotWindow from './ChatbotWindow';
import './Chatbot.css'; // Import custom styles for the chatbot

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header" onClick={toggleChatbot}>
          <span className="chatbot-title">Chat with us</span>
          <button className="chatbot-toggle-btn">
            {isOpen ? '-' : '+'}
          </button>
        </div>
        {isOpen && (
          <div className="chatbot-body">
            <ChatbotWindow />
          </div>
        )}
      </div>
      <button className="chatbot-float-btn" onClick={toggleChatbot}>
        Chat
      </button>
    </>
  );
};

export default Chatbot;

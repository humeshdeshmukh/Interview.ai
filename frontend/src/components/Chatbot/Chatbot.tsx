// src/components/Chatbot/Chatbot.tsx
import React, { useState } from 'react';
import './ChatbotWindow.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <div className="chatbot-window">
          <div className="chatbot-window-header">
            <button className="chatbot-close-button" onClick={toggleChatbot}>
              &#x2715; {/* Close Icon */}
            </button>
            Chatbot
          </div>
          <div className="chatbot-window-messages">
            {/* Render chat messages here */}
          </div>
          <div className="chatbot-window-input">
            <textarea
              className="chatbot-window-textarea"
              placeholder="Type a message..."
            />
            <button className="chatbot-window-send-button">
              Send
            </button>
          </div>
        </div>
      ) : (
        <button className="chatbot-icon-button" onClick={toggleChatbot}>
          <img src="/path/to/chatbot-icon.png" alt="Chatbot Icon" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;

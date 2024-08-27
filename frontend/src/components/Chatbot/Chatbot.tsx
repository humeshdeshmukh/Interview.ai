import React from 'react';
import { Button } from 'react-bootstrap';
import './Chatbot.css'; // Import your custom CSS if needed

const Chatbot: React.FC = () => {
  const openChatbot = () => {
    // Replace with your chatbot service initialization code
    window.open('https://your-chatbot-link.com', '_blank');
  };

  return (
    <div className="chatbot-container text-center">
      <Button 
        variant="info" 
        className="chatbot-button"
        onClick={openChatbot}
        aria-label="Chat with us"
      >
        <span className="chatbot-icon">&#128172;</span> {/* Emoji or icon for chatbot */}
        Chat with us
      </Button>
      <p className="mt-2">
        Have questions? Our AI chatbot is here to help!
      </p>
    </div>
  );
};

export default Chatbot;

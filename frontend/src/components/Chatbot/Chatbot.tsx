import React, { useState } from 'react';
import './ChatbotWindow.css';
import chatbotIcon from './chatbot.1.png';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      // Add the new message to the state
      const newMessage: Message = { text: inputValue, sender: 'user' };
      setMessages([...messages, newMessage]);

      // Clear the input field
      setInputValue('');

      // Add a bot response (optional)
      const botReply: Message = { text: "This is a bot response!", sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, newMessage, botReply]);
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <div className="chatbot-window">
          <div className="chatbot-window-header">
            <button
              className="chatbot-close-button"
              onClick={toggleChatbot}
              aria-label="Close Chatbot"
            >
              &#x2715; {/* Close Icon */}
            </button>
            <span>Chatbot</span>
          </div>
          <div className="chatbot-window-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  message.sender === 'user' ? 'user-message' : 'bot-message'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-window-input">
            <textarea
              className="chatbot-window-textarea"
              placeholder="Type a message..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              className="chatbot-window-send-button"
              onClick={handleSend}
              aria-label="Send Message"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          className="chatbot-icon-button"
          onClick={toggleChatbot}
          aria-label="Open Chatbot"
        >
          <img src={chatbotIcon} alt="Chatbot Icon" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;

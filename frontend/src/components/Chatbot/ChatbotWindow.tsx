import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ChatbotMessage from './ChatbotMessage';
import './ChatbotWindow.css'; // Import custom CSS if needed

const ChatbotWindow: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; message: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', message: input }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'user', message: input },
          { sender: 'bot', message: "I'm here to help!" },
        ]);
      }, 1000);
    }
  };

  return (
    <Container className="chatbot-window">
      <Row>
        <Col md={12} className="chat-area">
          {messages.map((msg, index) => (
            <ChatbotMessage key={index} sender={msg.sender} message={msg.message} />
          ))}
        </Col>
      </Row>
      <Row>
        <Col md={12} className="input-area">
          <Form onSubmit={handleSendMessage} className="d-flex">
            <Form.Control
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="mr-2"
            />
            <Button type="submit" variant="primary">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatbotWindow;

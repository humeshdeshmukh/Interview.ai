import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Modal, Spinner, Form } from 'react-bootstrap';
import "./PracticeTests.css";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface PracticeTest {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  questions: Question[];
}

const PracticeTests: React.FC = () => {
  const [tests, setTests] = useState<PracticeTest[]>([]);
  const [filteredTests, setFilteredTests] = useState<PracticeTest[]>([]);
  const [selectedTest, setSelectedTest] = useState<PracticeTest | null>(null);
  const [showTestModal, setShowTestModal] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(300); // 5 minutes
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for search term

  // Fetch questions from the JSON file
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('src/components/practice-test/questions.json');
      const data = await response.json();
      setTests(data);
      setFilteredTests(data); // Initialize filtered tests with all tests
    };
    fetchQuestions();
  }, []);

  // Filter tests based on search term
  useEffect(() => {
    const results = tests.filter(test =>
      test.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTests(results);
  }, [searchTerm, tests]);

  // Timer setup
  useEffect(() => {
    if (timeLeft === 0) {
      handleCompleteTest();
    }

    if (showTestModal) {
      const id = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [timeLeft, showTestModal]);

  const handleViewTest = (test: PracticeTest) => {
    setSelectedTest(test);
    setShowTestModal(true);
    setUserAnswer('');
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(300);
    setShowAnswer(false);
  };

  const handleAnswerSubmit = () => {
    if (userAnswer.trim().toLowerCase() === selectedTest?.questions[currentQuestionIndex].answer.trim().toLowerCase()) {
      setScore(prev => prev + 1);
    }
    setUserAnswer('');

    if (currentQuestionIndex < selectedTest!.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowAnswer(false);
    } else {
      handleCompleteTest();
    }
  };

  const handleCompleteTest = () => {
    if (selectedTest) {
      setTests(prevTests =>
        prevTests.map(t => (t.id === selectedTest.id ? { ...t, isCompleted: true } : t))
      );
      setShowTestModal(false);
      if (intervalId) clearInterval(intervalId);
    }
  };

  const handleCloseModal = () => {
    setShowTestModal(false);
    setSelectedTest(null);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedTest!.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowAnswer(false);
    }
  };

  const toggleShowAnswer = () => {
    setShowAnswer(prev => !prev);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Practice Tests</h1>
      
      {/* Search input */}
      <Form.Group controlId="search" className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search practice tests..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      <div className="row">
        {filteredTests.length > 0 ? (
          filteredTests.map((test) => (
            <div className="col-md-4 mb-3" key={test.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{test.title}</Card.Title>
                  <Card.Text>{test.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleViewTest(test)}>
                    Start Test
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No tests to display.</p>
        )}
      </div>

      {/* Test Modal */}
      <Modal show={showTestModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedTest?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTest ? (
            <>
              <p>{selectedTest.description}</p>
              <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</p>
              <h5>{selectedTest.questions[currentQuestionIndex].question}</h5>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your answer here"
                className="form-control mb-3"
              />
              <div className="d-flex justify-content-between mb-3">
                <Button variant="success" onClick={handleAnswerSubmit}>
                  Submit Answer
                </Button>
                <div>
                  <Button variant="secondary" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0} className="me-2">
                    Previous Question
                  </Button>
                  <Button variant="secondary" onClick={handleNextQuestion} disabled={currentQuestionIndex === selectedTest.questions.length - 1}>
                    Next Question
                  </Button>
                </div>
              </div>

              <Button variant="info" onClick={toggleShowAnswer} className="mt-3">
                {showAnswer ? 'Hide Answer' : 'Show Answer'}
              </Button>

              {showAnswer && (
                <div className="mt-3">
                  <h6>Correct Answer: {selectedTest.questions[currentQuestionIndex].answer}</h6>
                </div>
              )}

              {currentQuestionIndex === selectedTest.questions.length - 1 && (
                <div>
                  <h5>Your Score: {score} out of {selectedTest.questions.length}</h5>
                </div>
              )}
            </>
          ) : (
            <Spinner animation="border" />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PracticeTests;

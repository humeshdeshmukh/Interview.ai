import React, { useState } from 'react';
import { Container, Card, Button, Form, ProgressBar, Dropdown, Modal, Spinner, InputGroup } from 'react-bootstrap';

interface Question {
  id: number;
  title: string;
  description: string;
  isBookmarked: boolean;
}

const InterviewQuestions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, title: 'Tell me about yourself', description: 'Describe your background and experience in a brief manner.', isBookmarked: false },
    { id: 2, title: 'What is your greatest strength?', description: 'Discuss your most significant strength and provide examples of how it has helped you in your career.', isBookmarked: false },
    { id: 3, title: 'What is your greatest weakness?', description: 'Explain a weakness you have and how you are working to improve it.', isBookmarked: false },
    { id: 4, title: 'Why do you want to work here?', description: 'Share your reasons for wanting to join the company and how you align with its values and goals.', isBookmarked: false },
    { id: 5, title: 'Describe a challenging project you worked on.', description: 'Provide details about a difficult project and how you managed to overcome the challenges.', isBookmarked: false },
    { id: 6, title: 'How do you handle stress and pressure?', description: 'Discuss your strategies for managing stress and maintaining performance under pressure.', isBookmarked: false },
    { id: 7, title: 'Where do you see yourself in five years?', description: 'Outline your career goals and how you plan to achieve them.', isBookmarked: false },
    { id: 8, title: 'Describe a time when you had to work as part of a team.', description: 'Share an experience where you collaborated with others to achieve a common goal.', isBookmarked: false },
    { id: 9, title: 'How do you prioritize your work?', description: 'Explain your approach to managing tasks and meeting deadlines.', isBookmarked: false },
    { id: 10, title: 'Why should we hire you?', description: 'Summarize why you are the best candidate for the position and what unique qualities you bring to the team.', isBookmarked: false },
  ]);

  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);

  const handleBookmark = (id: number) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, isBookmarked: !q.isBookmarked } : q))
    );
  };

  const handleFilterChange = (filterValue: string) => {
    setFilter(filterValue);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleViewDetails = (question: Question) => {
    setSelectedQuestion(question);
    setShowDetailsModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailsModal(false);
    setSelectedQuestion(null);
  };

  const filteredQuestions = questions
    .filter((q) => (filter === 'Bookmarked' ? q.isBookmarked : true))
    .filter((q) => q.title.toLowerCase().includes(search.toLowerCase()) || q.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Interview Questions</h1>

      {/* Search, Filter, and Progress Bar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={handleSearchChange}
          />
          <Button variant="outline-secondary">Search</Button>
        </InputGroup>

        <div className="d-flex align-items-center mb-3 mb-md-0">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="filter-dropdown">
              Filter Questions
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleFilterChange('All')}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange('Bookmarked')}>Bookmarked</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="w-50 ms-3" />
        </div>
      </div>

      <div className="row">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <div className="col-md-4 mb-3" key={question.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{question.title}</Card.Title>
                  <Card.Text>{question.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleViewDetails(question)}>
                    View Details
                  </Button>
                  <Button
                    variant={question.isBookmarked ? 'warning' : 'outline-warning'}
                    onClick={() => handleBookmark(question.id)}
                    className="ms-2"
                  >
                    {question.isBookmarked ? 'Unbookmark' : 'Bookmark'}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No questions to display.</p>
        )}
      </div>

      {/* Details Modal */}
      <Modal show={showDetailsModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedQuestion?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedQuestion ? (
            <>
              <p>{selectedQuestion.description}</p>
              {/* Add more detailed information here if needed */}
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

export default InterviewQuestions;

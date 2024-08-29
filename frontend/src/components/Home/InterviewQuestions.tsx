// src/components/InterviewQuestions.tsx

import React, { useState } from 'react';
import { Container, Card, Button, Form, ProgressBar, Dropdown, Modal, Spinner, InputGroup } from 'react-bootstrap';
import { questions, Question } from './questionsData'; // Adjust the path as necessary

const InterviewQuestions: React.FC = () => {
  const [questionsData, setQuestionsData] = useState<Question[]>(questions); // Use imported questions
  const [filter, setFilter] = useState<string>('All');
  const [companyFilter, setCompanyFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);

  const handleBookmark = (id: number) => {
    setQuestionsData((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, isBookmarked: !q.isBookmarked } : q))
    );
  };

  const handleFilterChange = (filterValue: string) => {
    setFilter(filterValue);
  };

  const handleCompanyFilterChange = (companyValue: string) => {
    setCompanyFilter(companyValue);
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

  const filteredQuestions = questionsData
    .filter((q) => (filter === 'Bookmarked' ? q.isBookmarked : true))
    .filter((q) => (filter === 'Tech' || filter === 'Non-Tech' ? q.category === filter : true))
    .filter((q) => (companyFilter === 'All' ? true : q.company === companyFilter))
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
              Filter by Category
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleFilterChange('All')}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange('Tech')}>Tech</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange('Non-Tech')}>Non-Tech</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange('Bookmarked')}>Bookmarked</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="ms-3">
            <Dropdown.Toggle variant="secondary" id="company-filter-dropdown">
              Filter by Company
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleCompanyFilterChange('All')}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCompanyFilterChange('TCS')}>TCS</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCompanyFilterChange('Infosys')}>Infosys</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCompanyFilterChange('Google')}>Google</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCompanyFilterChange('Amazon')}>Amazon</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCompanyFilterChange('Facebook')}>Facebook</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCompanyFilterChange('Apple')}>Apple</Dropdown.Item>
              {/* Add more companies as needed */}
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

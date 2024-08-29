import React, { useState } from 'react';
import { Container, Card, Button, Form, Dropdown, Modal, Spinner, InputGroup, Row, Col, Badge } from 'react-bootstrap';
import { questions, Question } from './questionsData'; // Adjust the path as necessary
import './InterviewQuestions.css';

const InterviewQuestions: React.FC = () => {
  const [questionsData, setQuestionsData] = useState<Question[]>(questions); // Use imported questions
  const [filter, setFilter] = useState<string>('All');
  const [companyFilter, setCompanyFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
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
    .filter((q) =>
      q.title.toLowerCase().includes(search.toLowerCase()) ||
      q.description.toLowerCase().includes(search.toLowerCase()) ||
      q.category.toLowerCase().includes(search.toLowerCase()) ||
      q.company.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Interview Questions</h1>

      {/* Search, Filter, and Progress Bar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <InputGroup className="mb-3 w-100 w-md-50">
          <Form.Control
            type="text"
            placeholder="Search questions by title, category, or company..."
            value={search}
            onChange={handleSearchChange}
          />
          <Button variant="outline-secondary" onClick={() => setSearch('')}>Clear</Button>
        </InputGroup>

        <div className="d-flex align-items-center mb-3 mb-md-0">
          <Dropdown className="me-2">
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

          <Dropdown>
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
              <Dropdown.Item onClick={() => handleCompanyFilterChange('Microsoft')}>Microsoft</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCompanyFilterChange('IBM')}>IBM</Dropdown.Item>
              {/* Add more companies as needed */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <Row>
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <Col md={6} lg={4} className="mb-3" key={question.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>
                    {question.title}
                    <Badge bg="info" className="ms-2">{question.category}</Badge>
                    <Badge bg="success" className="ms-2">{question.company}</Badge>
                  </Card.Title>
                  <Card.Text>
                    {question.description.length > 100
                      ? question.description.substring(0, 100) + '...'
                      : question.description}
                  </Card.Text>
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
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <p className="text-muted">No questions to display.</p>
          </Col>
        )}
      </Row>

      {/* Details Modal */}
      <Modal show={showDetailsModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedQuestion?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedQuestion ? (
            <>
              <h5>Category: <Badge bg="info">{selectedQuestion.category}</Badge></h5>
              <h5>Company: <Badge bg="success">{selectedQuestion.company}</Badge></h5>
              <p>{selectedQuestion.description}</p>
              <p><strong>Details:</strong> {selectedQuestion.details || 'No additional details available.'}</p>
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

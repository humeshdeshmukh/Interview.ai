import React, { useState } from 'react';
import { Container, Card, Button, Form, ProgressBar, Dropdown, Modal, Spinner, InputGroup } from 'react-bootstrap';

interface PracticeTest {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

const PracticeTests: React.FC = () => {
  const [tests, setTests] = useState<PracticeTest[]>([
    { id: 1, title: 'JavaScript Basics', description: 'Test your knowledge on JavaScript fundamentals.', isCompleted: false },
    { id: 2, title: 'React Fundamentals', description: 'Assess your understanding of core React concepts.', isCompleted: false },
    { id: 3, title: 'CSS Layouts', description: 'Evaluate your skills in CSS layouts and styling.', isCompleted: false },
    { id: 4, title: 'TypeScript Essentials', description: 'Check your grasp of TypeScript basics and advanced features.', isCompleted: false },
    { id: 5, title: 'Database Management', description: 'Test your knowledge of database systems and queries.', isCompleted: false },
    { id: 6, title: 'APIs and Integrations', description: 'Assess your understanding of working with APIs and integrations.', isCompleted: false },
    { id: 7, title: 'Version Control with Git', description: 'Evaluate your proficiency with Git and version control practices.', isCompleted: false },
    { id: 8, title: 'Advanced JavaScript', description: 'Test your knowledge of advanced JavaScript concepts and patterns.', isCompleted: false },
    { id: 9, title: 'Node.js Basics', description: 'Check your understanding of Node.js and server-side JavaScript.', isCompleted: false },
    { id: 10, title: 'Front-end Frameworks', description: 'Assess your skills in various front-end frameworks.', isCompleted: false },
  ]);

  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [selectedTest, setSelectedTest] = useState<PracticeTest | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);

  const handleCompletionToggle = (id: number) => {
    setTests((prevTests) =>
      prevTests.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  };

  const handleFilterChange = (filterValue: string) => {
    setFilter(filterValue);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleViewDetails = (test: PracticeTest) => {
    setSelectedTest(test);
    setShowDetailsModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailsModal(false);
    setSelectedTest(null);
  };

  const filteredTests = tests
    .filter((t) => (filter === 'Completed' ? t.isCompleted : filter === 'Incomplete' ? !t.isCompleted : true))
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Practice Tests</h1>

      {/* Search, Filter, and Progress Bar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search tests..."
            value={search}
            onChange={handleSearchChange}
          />
          <Button variant="outline-secondary">Search</Button>
        </InputGroup>

        <div className="d-flex align-items-center mb-3 mb-md-0">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="filter-dropdown">
              Filter Tests
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleFilterChange('All')}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange('Completed')}>Completed</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange('Incomplete')}>Incomplete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="w-50 ms-3" />
        </div>
      </div>

      <div className="row">
        {filteredTests.length > 0 ? (
          filteredTests.map((test) => (
            <div className="col-md-4 mb-3" key={test.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{test.title}</Card.Title>
                  <Card.Text>{test.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleViewDetails(test)}>
                    View Details
                  </Button>
                  <Button
                    variant={test.isCompleted ? 'success' : 'outline-success'}
                    onClick={() => handleCompletionToggle(test.id)}
                    className="ms-2"
                  >
                    {test.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No tests to display.</p>
        )}
      </div>

      {/* Details Modal */}
      <Modal show={showDetailsModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedTest?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTest ? (
            <>
              <p>{selectedTest.description}</p>
              {/* Add more detailed information or instructions here if needed */}
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

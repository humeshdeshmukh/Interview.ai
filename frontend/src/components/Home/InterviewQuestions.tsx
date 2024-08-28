import React, { useState } from 'react';
import { Container, Card, Button, Form, ProgressBar, Dropdown } from 'react-bootstrap';

interface Question {
  id: number;
  title: string;
  description: string;
  isBookmarked: boolean;
}

const InterviewQuestions: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, title: 'Question 1', description: 'This is a brief description or example of the first interview question.', isBookmarked: false },
    { id: 2, title: 'Question 2', description: 'This is a brief description or example of the second interview question.', isBookmarked: false },
    { id: 3, title: 'Question 3', description: 'This is a brief description or example of the third interview question.', isBookmarked: false },
    // Add more questions here
  ]);

  const [filter, setFilter] = useState<string>('All');
  const [progress, setProgress] = useState<number>(0);

  const handleBookmark = (id: number) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, isBookmarked: !q.isBookmarked } : q))
    );
  };

  const handleFilterChange = (filterValue: string) => {
    setFilter(filterValue);
  };

  const handleViewDetails = (id: number) => {
    // Simulate viewing the question details
    setProgress((prevProgress) => Math.min(prevProgress + (100 / questions.length), 100));
  };

  const filteredQuestions = questions.filter((q) =>
    filter === 'Bookmarked' ? q.isBookmarked : true
  );

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Interview Questions</h1>

      {/* Filter and Progress Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="filter-dropdown">
            Filter Questions
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFilterChange('All')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange('Bookmarked')}>Bookmarked</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="w-50" />
      </div>

      <div className="row">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <div className="col-md-4 mb-3" key={question.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{question.title}</Card.Title>
                  <Card.Text>{question.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleViewDetails(question.id)}>
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
    </Container>
  );
};

export default InterviewQuestions;

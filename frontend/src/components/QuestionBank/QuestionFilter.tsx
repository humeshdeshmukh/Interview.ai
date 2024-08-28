import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
// import './QuestionFilter.css'; // Import custom styles if needed

interface QuestionFilterProps {
  onFilterChange: (filters: { [key: string]: string }) => void;
}

const QuestionFilter: React.FC<QuestionFilterProps> = ({ onFilterChange }) => {
  const [category, setCategory] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');

  const handleFilterChange = () => {
    onFilterChange({ category, difficulty, keyword });
  };

  return (
    <div className="question-filter-container">
      <h2 className="text-center mb-4">Filter Questions</h2>
      <Form>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="filterCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="technical">Technical</option>
                <option value="behavioral">Behavioral</option>
                {/* Add more categories as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="filterDifficulty">
              <Form.Label>Difficulty</Form.Label>
              <Form.Control
                as="select"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="">Select Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="filterKeyword">
              <Form.Label>Keyword</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" onClick={handleFilterChange}>
          Apply Filters
        </Button>
      </Form>
    </div>
  );
};

export default QuestionFilter;

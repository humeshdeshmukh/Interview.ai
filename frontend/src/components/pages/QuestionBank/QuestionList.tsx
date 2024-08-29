import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './QuestionList.css'; // Import custom styles if needed

interface Question {
  id: string;
  title: string;
  summary: string;
}

interface QuestionListProps {
  questions: Question[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <div className="question-list-container">
      <h2 className="text-center mb-4">Question Bank</h2>
      <ListGroup>
        {questions.map((question) => (
          <ListGroupItem key={question.id} className="d-flex justify-content-between align-items-center">
            <div>
              <h5>{question.title}</h5>
              <p>{question.summary}</p>
            </div>
            <Link to={`/questions/${question.id}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default QuestionList;

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './ResourceCard.css'; // Import custom styles if needed

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ id, title, description, imageUrl }) => {
  return (
    <Card className="resource-card">
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/resources/${id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ResourceCard;

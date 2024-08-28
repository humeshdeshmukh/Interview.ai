import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import './ResourceDetail.css'; // Import custom styles if needed

interface ResourceDetailProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const ResourceDetail: React.FC = () => {
  const { resourceId } = useParams<{ resourceId: string }>(); // Extract resourceId from route parameters

  // Placeholder data, replace with actual data fetching logic
  const resourceData: ResourceDetailProps = {
    title: 'Sample Resource Title',
    description: 'This is a detailed description of the resource. It provides valuable insights and information related to interview preparation.',
    link: 'https://example.com',
    imageUrl: 'https://via.placeholder.com/500'
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={resourceData.imageUrl} alt={resourceData.title} />
            <Card.Body>
              <Card.Title>{resourceData.title}</Card.Title>
              <Card.Text>{resourceData.description}</Card.Text>
              <Button variant="primary" href={resourceData.link} target="_blank" rel="noopener noreferrer">
                Visit Resource
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ResourceDetail;

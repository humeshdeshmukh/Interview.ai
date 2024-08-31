import React from 'react';
import { Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { FaBookOpen, FaPlayCircle } from 'react-icons/fa';

const TutorialCard = ({ title, description, link }: { title: string, description: string, link: string }) => (
  <Card className="shadow-lg">
    <CardContent>
      <div className="flex items-center mb-4">
        <FaBookOpen className="text-3xl text-blue-500 mr-4" />
        <Typography variant="h5" className="font-semibold">
          {title}
        </Typography>
      </div>
      <Typography variant="body2" color="textSecondary" className="mb-4">
        {description}
      </Typography>
      <Button variant="contained" color="primary" href={link} target="_blank" rel="noopener noreferrer">
        View Tutorial
      </Button>
    </CardContent>
  </Card>
);

const Tutorials: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Tutorials
      </Typography>
      <div className="mb-6 flex items-center">
        <FaPlayCircle className="text-3xl text-green-500 mr-4" />
        <Typography variant="h6" className="font-semibold">
          Learn from Our Tutorials
        </Typography>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <TutorialCard
            title="Getting Started with React"
            description="An introductory guide to getting started with React, perfect for beginners."
            link="https://reactjs.org/docs/getting-started.html"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TutorialCard
            title="Advanced React Patterns"
            description="Explore advanced patterns and techniques to master React."
            link="https://reactjs.org/docs/patterns.html"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TutorialCard
            title="State Management with Redux"
            description="Learn how to manage state in React applications using Redux."
            link="https://redux.js.org/introduction/getting-started"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tutorials;

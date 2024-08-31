import React from 'react';
import { Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import { FaVideo, FaCalendarAlt } from 'react-icons/fa';

const WebinarCard = ({ title, description, date, link }: { title: string, description: string, date: string, link: string }) => (
  <Card className="shadow-lg">
    <CardContent>
      <div className="flex items-center mb-4">
        <FaVideo className="text-3xl text-blue-500 mr-4" />
        <Typography variant="h5" className="font-semibold">
          {title}
        </Typography>
      </div>
      <Typography variant="body2" color="textSecondary" className="mb-4">
        {description}
      </Typography>
      <div className="flex items-center mb-4">
        <FaCalendarAlt className="text-xl text-gray-600 mr-2" />
        <Typography variant="body2" color="textSecondary">
          {date}
        </Typography>
      </div>
      <Button variant="contained" color="primary" href={link} target="_blank" rel="noopener noreferrer">
        Join Webinar
      </Button>
    </CardContent>
  </Card>
);

const Webinars: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Webinars
      </Typography>
      <div className="mb-6 flex items-center">
        <FaVideo className="text-3xl text-green-500 mr-4" />
        <Typography variant="h6" className="font-semibold">
          Upcoming Webinars
        </Typography>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <WebinarCard
            title="Introduction to React"
            description="Join us for an introductory webinar on React, covering the basics of this popular library."
            date="September 15, 2024"
            link="https://example.com/webinar-intro-to-react"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <WebinarCard
            title="Advanced JavaScript Techniques"
            description="Dive deep into advanced JavaScript techniques and best practices in this comprehensive webinar."
            date="September 22, 2024"
            link="https://example.com/webinar-advanced-js"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <WebinarCard
            title="State Management with Redux"
            description="Learn how to manage state effectively in your applications using Redux."
            date="September 29, 2024"
            link="https://example.com/webinar-redux"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Webinars;

import React from 'react';
import { Container, Typography, Card, CardContent, Button, Grid, CardMedia } from '@mui/material';
import { FaFileAlt, FaDownload } from 'react-icons/fa';

const TemplateCard = ({ title, description, imageUrl }: { title: string, description: string, imageUrl: string }) => (
  <Card className="shadow-lg">
    <CardMedia
      component="img"
      alt={title}
      height="140"
      image={imageUrl}
      title={title}
    />
    <CardContent>
      <Typography variant="h5" className="font-semibold mb-2">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" className="mb-4">
        {description}
      </Typography>
      <Button variant="contained" color="primary" startIcon={<FaDownload />}>
        Download
      </Button>
    </CardContent>
  </Card>
);

const Templates: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Templates
      </Typography>
      <div className="mb-6 flex items-center">
        <FaFileAlt className="text-3xl text-blue-500 mr-4" />
        <Typography variant="h6" className="font-semibold">
          Explore Our Templates
        </Typography>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <TemplateCard
            title="Resume Template A"
            description="A modern and professional resume template for job seekers."
            imageUrl="https://via.placeholder.com/300x140"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TemplateCard
            title="Cover Letter Template"
            description="An elegant cover letter template to accompany your resume."
            imageUrl="https://via.placeholder.com/300x140"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TemplateCard
            title="Interview Preparation Checklist"
            description="A comprehensive checklist to help you prepare for your interviews."
            imageUrl="https://via.placeholder.com/300x140"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Templates;

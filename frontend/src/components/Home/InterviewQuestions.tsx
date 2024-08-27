import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid } from '@mui/material';

const InterviewSection: React.FC = () => {
  return (
    <Box className="bg-gray-100 py-16 px-4">
      <Typography variant="h4" component="h2" className="text-center text-black mb-8">
        Interview Preparation
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h6" component="h3" className="text-center text-gray-800">
                Resume Builder
              </Typography>
              <Typography className="text-center text-gray-600 mt-4">
                Create a professional resume with ease.
              </Typography>
              <Button variant="contained" color="primary" fullWidth className="mt-6">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h6" component="h3" className="text-center text-gray-800">
                Interview Questions
              </Typography>
              <Typography className="text-center text-gray-600 mt-4">
                Practice with real interview questions.
              </Typography>
              <Button variant="contained" color="primary" fullWidth className="mt-6">
                Explore Questions
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h6" component="h3" className="text-center text-gray-800">
                Mock Interviews
              </Typography>
              <Typography className="text-center text-gray-600 mt-4">
                Simulate real interview scenarios.
              </Typography>
              <Button variant="contained" color="primary" fullWidth className="mt-6">
                Start Mock Interview
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InterviewSection;

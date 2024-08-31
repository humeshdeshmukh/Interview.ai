import React from 'react';
import { Container, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import { FaExclamationTriangle } from 'react-icons/fa';

const ReportIssue: React.FC = () => {
  return (
    <Container maxWidth="md" className="py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Report an Issue
      </Typography>

      <div className="mb-6 flex items-center">
        <FaExclamationTriangle className="text-3xl text-red-500 mr-4" />
        <Typography variant="h6" className="font-semibold">
          We’re here to help!
        </Typography>
      </div>

      <Card className="shadow-lg">
        <CardContent>
          <Typography variant="h6" className="font-semibold mb-4">
            Describe Your Issue
          </Typography>
          <form noValidate autoComplete="off" className="space-y-4">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              required
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit Report
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ReportIssue;

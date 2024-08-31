import React from 'react';
import { Button, TextField, Typography, Container, Card, CardContent } from '@mui/material';
import { FaRegCommentDots } from 'react-icons/fa';

const Feedback: React.FC = () => {
  return (
    <Container maxWidth="md" className="py-8">
      <Card className="shadow-lg">
        <CardContent>
          <Typography variant="h1" className="text-4xl font-bold mb-6">
            Feedback
          </Typography>

          <Typography variant="body1" className="mb-6">
            We value your feedback and suggestions. Please fill out the form below to share your thoughts with us.
          </Typography>

          <form className="space-y-4">
            <div className="flex items-center mb-4">
              <FaRegCommentDots className="text-3xl text-blue-500 mr-4" />
              <Typography variant="h6" className="font-semibold">
                Share Your Feedback
              </Typography>
            </div>

            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              className="mb-4"
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              className="mb-4"
            />
            <TextField
              label="Feedback"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              className="mb-4"
            />

            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Feedback;

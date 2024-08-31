import React from 'react';
import { Button, Typography, TextField, Box, Container } from '@mui/material';
import { FaComments } from 'react-icons/fa';

const LiveChat: React.FC = () => {
  return (
    <Container maxWidth="md" className="py-8">
      <Box className="bg-white shadow-lg rounded-lg p-6">
        <Typography variant="h1" className="text-4xl font-bold mb-6">
          Live Chat
        </Typography>

        <Typography variant="body1" className="mb-6">
          Connect with our support team in real-time. Please enter your message below and our team will assist you shortly.
        </Typography>

        <div className="mb-6 flex items-center">
          <FaComments className="text-3xl text-blue-500 mr-4" />
          <Typography variant="h6" className="font-semibold">
            Start a Chat
          </Typography>
        </div>

        <form className="space-y-4">
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
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            className="mb-4"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Start Chat
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LiveChat;

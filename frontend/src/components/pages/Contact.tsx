import React from 'react';
import { Button, TextField, Typography, Card, CardContent, CardMedia, Divider } from '@mui/material';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="page-content max-w-screen-lg mx-auto px-4 py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Contact Us
      </Typography>

      <Typography variant="body1" className="text-lg mb-6">
        We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
      </Typography>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg p-4">
          <CardContent>
            <Typography variant="h6" className="font-semibold mb-4">
              Get in Touch
            </Typography>
            <form noValidate autoComplete="off">
              <div className="mb-4">
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </div>
              <div className="mb-4">
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  required
                />
              </div>
              <div className="mb-4">
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                />
              </div>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-lg p-4">
          <CardContent>
            <Typography variant="h6" className="font-semibold mb-4">
              Our Contact Information
            </Typography>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FaPhone className="text-2xl text-blue-500 mr-2" />
                <Typography variant="body1">
                  +1 (123) 456-7890
                </Typography>
              </div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-2xl text-blue-500 mr-2" />
                <Typography variant="body1">
                  contact@interviewmaster.ai
                </Typography>
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-2xl text-blue-500 mr-2" />
                <Typography variant="body1">
                  123 Tech Avenue, Silicon Valley, CA 94043, USA
                </Typography>
              </div>
            </div>
            <Button variant="outlined" color="primary" href="https://www.google.com/maps" target="_blank" fullWidth>
              View on Map
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;

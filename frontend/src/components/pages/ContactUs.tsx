import React from 'react';
import { Button, TextField, Typography, Card, CardContent, Divider } from '@mui/material';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs: React.FC = () => {
  return (
    <div className="page-content max-w-screen-lg mx-auto px-4 py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Contact Us
      </Typography>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="shadow-lg">
          <CardContent>
            <Typography variant="h6" className="font-semibold mb-4">
              Get in Touch
            </Typography>
            <form noValidate autoComplete="off" className="space-y-4">
              <div>
                <TextField
                  label="Name"
                  id="name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </div>
              <div>
                <TextField
                  label="Email"
                  id="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </div>
              <div>
                <TextField
                  label="Message"
                  id="message"
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

        {/* Contact Information */}
        <Card className="shadow-lg">
          <CardContent>
            <Typography variant="h6" className="font-semibold mb-4">
              Our Contact Information
            </Typography>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-2xl text-blue-500 mr-2" />
                <Typography variant="body1">
                  +1 (123) 456-7890
                </Typography>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-2xl text-blue-500 mr-2" />
                <Typography variant="body1">
                  contact@interviewmaster.ai
                </Typography>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-2xl text-blue-500 mr-2" />
                <Typography variant="body1">
                  123 Tech Avenue, Silicon Valley, CA 94043, USA
                </Typography>
              </div>
            </div>
          </CardContent>
          <Divider />
          <CardContent>
            <Button
              variant="outlined"
              color="primary"
              href="https://www.google.com/maps"
              target="_blank"
              fullWidth
            >
              View on Map
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;

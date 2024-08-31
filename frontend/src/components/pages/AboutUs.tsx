import React from 'react';
import { Button, Typography, Card, CardContent } from '@mui/material';
import { FaRegAddressCard, FaRegHandshake } from 'react-icons/fa'; // Example icons

const AboutUs: React.FC = () => {
  return (
    <div className="page-content max-w-screen-lg mx-auto px-4 py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        About Us
      </Typography>
      <Typography variant="body1" className="text-lg mb-4">
        Welcome to InterviewMaster.ai, where we provide cutting-edge tools and resources to help you excel in your interviews.
      </Typography>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="shadow-lg">
          <CardContent>
            <FaRegAddressCard className="text-4xl mb-4 text-blue-500" />
            <Typography variant="h6" className="font-semibold mb-2">
              Our Mission
            </Typography>
            <Typography variant="body2">
              At InterviewMaster.ai, our mission is to empower job seekers by providing them with the most effective and innovative interview preparation tools.
            </Typography>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent>
            <FaRegHandshake className="text-4xl mb-4 text-green-500" />
            <Typography variant="h6" className="font-semibold mb-2">
              Our Values
            </Typography>
            <Typography variant="body2">
              We value integrity, innovation, and user-centric design. Our goal is to create a platform that meets your needs and exceeds your expectations.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="shadow-lg"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;

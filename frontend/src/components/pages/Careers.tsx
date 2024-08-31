import React from 'react';
import { Button, Typography, Card, CardContent, CardActions, Paper } from '@mui/material';
import { FaRegHandshake, FaRegFileAlt } from 'react-icons/fa';

const Careers: React.FC = () => {
  // Dummy job listings data
  const jobListings = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Remote',
      description: 'Build and maintain the front end of our web applications using React, Tailwind CSS, and Material-UI.',
      requirements: 'Experience with React and modern frontend technologies.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      location: 'New York, NY',
      description: 'Develop and maintain server-side applications and APIs using Node.js and PostgreSQL.',
      requirements: 'Experience with Node.js and relational databases.',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      location: 'San Francisco, CA',
      description: 'Design and enhance user interfaces and experiences for our web applications.',
      requirements: 'Experience with design tools like Figma and Adobe XD.',
    }
  ];

  return (
    <div className="page-content max-w-screen-lg mx-auto px-4 py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Careers
      </Typography>
      <Typography variant="body1" className="text-lg mb-6">
        Join our team and help us build innovative solutions. We are looking for talented individuals to fill various positions.
      </Typography>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobListings.map((job) => (
          <Card key={job.id} className="shadow-lg">
            <CardContent>
              <Typography variant="h6" className="font-semibold mb-2">
                {job.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" className="mb-2">
                <FaRegFileAlt className="inline mr-1" />
                {job.location}
              </Typography>
              <Typography variant="body2" className="mb-2">
                {job.description}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <FaRegHandshake className="inline mr-1" />
                {job.requirements}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                Apply Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button variant="outlined" color="primary">
          View All Openings
        </Button>
      </div>
    </div>
  );
};

export default Careers;

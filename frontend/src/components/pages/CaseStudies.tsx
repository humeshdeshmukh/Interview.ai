import React from 'react';
import { Button, Typography, Card, CardContent, CardMedia, Divider, Paper } from '@mui/material';
import { FaFolderOpen } from 'react-icons/fa';

const CaseStudies: React.FC = () => {
  // Dummy case studies data
  const caseStudies = [
    {
      id: 1,
      title: 'Revolutionizing Online Education',
      description: 'Developed a comprehensive online learning platform that increased user engagement by 40%.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      id: 2,
      title: 'E-commerce Optimization',
      description: 'Implemented a streamlined checkout process that reduced cart abandonment by 25%.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      id: 3,
      title: 'Healthcare Data Management',
      description: 'Created an efficient data management system that improved patient data accessibility by 30%.',
      imageUrl: 'https://via.placeholder.com/300x200',
      link: '#'
    }
  ];

  return (
    <div className="page-content max-w-screen-lg mx-auto px-4 py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Case Studies
      </Typography>
      <Typography variant="body1" className="text-lg mb-6">
        Explore our case studies to see how we’ve helped clients achieve their goals with innovative solutions.
      </Typography>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <Card key={study.id} className="shadow-lg">
            <CardMedia
              component="img"
              height="140"
              image={study.imageUrl}
              alt={study.title}
            />
            <CardContent>
              <Typography variant="h6" className="font-semibold mb-2">
                {study.title}
              </Typography>
              <Typography variant="body2" className="mb-2">
                {study.description}
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <Button variant="contained" color="primary" href={study.link} target="_blank">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;

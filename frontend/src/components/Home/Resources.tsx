import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const resources = [
    {
        title: 'Resume Building Tips',
        description: 'Learn how to craft the perfect resume to land your dream job.',
        link: '/resume-tips',
    },
    {
        title: 'Top Interview Questions',
        description: 'Explore the most commonly asked interview questions and how to answer them.',
        link: '/interview-questions',
    },
    {
        title: 'Practice Tests',
        description: 'Take practice tests to prepare for your interviews.',
        link: '/practice-tests',
    },
    // Add more resources as needed
];

const Resources: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Typography variant="h4" className="text-center text-blue-600 font-bold mb-8">
                Resources
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                    <Card key={index} className="shadow-lg">
                        <CardContent>
                            <Typography variant="h6" className="text-gray-800 font-semibold mb-4">
                                {resource.title}
                            </Typography>
                            <Typography variant="body2" className="text-gray-600">
                                {resource.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                className="bg-blue-600 hover:bg-blue-700"
                                href={resource.link}
                            >
                                Explore
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Resources;

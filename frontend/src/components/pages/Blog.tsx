import React from 'react';
import { Button, Typography, Card, CardContent, CardMedia, Paper, Divider } from '@mui/material';
import { FaFilter, FaSort } from 'react-icons/fa';

const Blog: React.FC = () => {
  // Dummy blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      description: 'A deep dive into the React Hooks API, including useState, useEffect, and custom hooks.',
      imageUrl: 'https://via.placeholder.com/300x200',
      date: '2024-08-30'
    },
    {
      id: 2,
      title: 'Building Responsive UIs with Tailwind CSS',
      description: 'Learn how to create responsive and modern user interfaces using Tailwind CSS.',
      imageUrl: 'https://via.placeholder.com/300x200',
      date: '2024-08-29'
    },
    {
      id: 3,
      title: 'Introduction to Material-UI',
      description: 'Explore the Material-UI library and how to integrate it into your React projects.',
      imageUrl: 'https://via.placeholder.com/300x200',
      date: '2024-08-28'
    }
  ];

  return (
    <div className="page-content max-w-screen-lg mx-auto px-4 py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Blog
      </Typography>

      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <Button variant="outlined" color="primary" startIcon={<FaFilter />}>
            Filter
          </Button>
          <Button variant="outlined" color="secondary" startIcon={<FaSort />}>
            Sort
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="shadow-lg">
            <CardMedia
              component="img"
              height="140"
              image={post.imageUrl}
              alt={post.title}
            />
            <CardContent>
              <Typography variant="h6" className="font-semibold mb-2">
                {post.title}
              </Typography>
              <Typography variant="body2" className="mb-2">
                {post.description}
              </Typography>
              <Divider className="my-2" />
              <Typography variant="caption" color="textSecondary">
                {post.date}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;

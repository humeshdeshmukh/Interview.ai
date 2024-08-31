import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { FaNewspaper } from 'react-icons/fa';

const pressReleases = [
  { title: 'New Product Launch', date: 'August 15, 2024', summary: 'We are excited to announce our new product launch that will revolutionize the industry.' },
  { title: 'Partnership Announcement', date: 'July 22, 2024', summary: 'We have partnered with a leading company to enhance our service offerings.' },
  { title: 'Industry Award', date: 'June 10, 2024', summary: 'We have been honored with the prestigious industry award for innovation.' },
  { title: 'Company Milestone', date: 'May 5, 2024', summary: 'Our company has reached a significant milestone in its growth and development.' },
];

const Press: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Press
      </Typography>

      <Typography variant="body1" className="mb-6">
        Stay updated with our latest press releases, media coverage, and notable mentions. Here’s what’s been happening in the press about us.
      </Typography>

      <div className="mb-6 flex items-center">
        <FaNewspaper className="text-3xl text-blue-500 mr-4" />
        <Typography variant="h6" className="font-semibold">
          Press Releases
        </Typography>
      </div>

      <Grid container spacing={4}>
        {pressReleases.map((release, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card className="shadow-lg">
              <CardContent>
                <Typography variant="h6" className="font-semibold mb-2">
                  {release.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mb-2">
                  {release.date}
                </Typography>
                <Typography variant="body2" className="mb-4">
                  {release.summary}
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Press;

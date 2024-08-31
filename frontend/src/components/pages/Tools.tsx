import React from 'react';
import { Container, Typography, Card, CardContent, Button, Grid, CardMedia } from '@mui/material';
import { FaWrench, FaCog, FaTools } from 'react-icons/fa';

const ToolCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <Card className="shadow-lg">
    <CardContent className="flex items-center">
      <div className="mr-4 text-4xl text-blue-500">
        {icon}
      </div>
      <div>
        <Typography variant="h5" className="font-semibold mb-2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="mb-4">
          {description}
        </Typography>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </div>
    </CardContent>
  </Card>
);

const Tools: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Tools
      </Typography>
      <div className="mb-6 flex items-center">
        <FaTools className="text-3xl text-green-500 mr-4" />
        <Typography variant="h6" className="font-semibold">
          Explore Our Tools
        </Typography>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <ToolCard
            title="Resume Builder"
            description="Create professional resumes with ease using our intuitive builder."
            icon={<FaCog />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ToolCard
            title="Interview Simulator"
            description="Practice your interview skills with our realistic simulator."
            icon={<FaWrench />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ToolCard
            title="Skill Assessment"
            description="Assess your skills and get feedback to improve your performance."
            icon={<FaTools />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tools;

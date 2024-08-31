import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { FaHistory, FaBullhorn, FaTrophy } from 'react-icons/fa';

const TeamMemberCard = ({ name, role, imgSrc }: { name: string, role: string, imgSrc: string }) => (
  <Card className="shadow-lg mb-4">
    <CardContent className="flex items-center">
      <Avatar alt={name} src={imgSrc} className="w-16 h-16 mr-4" />
      <div>
        <Typography variant="h6" className="font-semibold">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {role}
        </Typography>
      </div>
    </CardContent>
  </Card>
);

const Company: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Company
      </Typography>

      <section className="mb-8">
        <Typography variant="h2" className="text-3xl font-bold mb-4">
          Our History
        </Typography>
        <Typography variant="body1" className="text-lg mb-4">
          Founded in 2024, InterviewMaster.ai has been at the forefront of providing innovative solutions for interview preparation. Our journey began with a vision to revolutionize the way candidates prepare for their interviews.
        </Typography>
        <FaHistory className="text-5xl text-gray-600" />
      </section>

      <section className="mb-8">
        <Typography variant="h2" className="text-3xl font-bold mb-4">
          Our Mission
        </Typography>
        <Typography variant="body1" className="text-lg mb-4">
          Our mission is to empower job seekers with the best tools and resources to ace their interviews and secure their dream jobs. We are committed to continuously improving and expanding our offerings to meet the evolving needs of our users.
        </Typography>
        <FaBullhorn className="text-5xl text-blue-600" />
      </section>

      <section className="mb-8">
        <Typography variant="h2" className="text-3xl font-bold mb-4">
          Meet the Team
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TeamMemberCard
              name="Humesh Deshmukh"
              role="Founder"
              imgSrc="https://via.placeholder.com/150" // Replace with actual image URL
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TeamMemberCard
              name="Aditi Lanjewar"
              role="Co-Founder"
              imgSrc="https://via.placeholder.com/150" // Replace with actual image URL
            />
          </Grid>
        </Grid>
      </section>

      <section className="mb-8">
        <Typography variant="h2" className="text-3xl font-bold mb-4">
          Our Achievements
        </Typography>
        <Typography variant="body1" className="text-lg mb-4">
          Over the years, we have achieved significant milestones, including:
        </Typography>
        <ul className="list-disc pl-5 mb-4">
          <li>Successfully helped thousands of candidates secure their dream jobs.</li>
          <li>Developed industry-leading tools and resources for interview preparation.</li>
          <li>Received multiple awards for innovation and excellence in the ed-tech industry.</li>
        </ul>
        <FaTrophy className="text-5xl text-yellow-600" />
      </section>
    </Container>
  );
};

export default Company;

import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { FaHandshake } from 'react-icons/fa';

const partners = [
  { name: 'Partner One', logo: 'https://via.placeholder.com/150', description: 'Description of Partner One.' },
  { name: 'Partner Two', logo: 'https://via.placeholder.com/150', description: 'Description of Partner Two.' },
  { name: 'Partner Three', logo: 'https://via.placeholder.com/150', description: 'Description of Partner Three.' },
  { name: 'Partner Four', logo: 'https://via.placeholder.com/150', description: 'Description of Partner Four.' },
];

const Partners: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Our Partners
      </Typography>

      <Typography variant="body1" className="mb-6">
        We are proud to partner with these esteemed organizations. Learn more about them and how we collaborate to bring value to our clients.
      </Typography>

      <div className="mb-6 flex items-center">
        <FaHandshake className="text-3xl text-blue-500 mr-4" />
        <Typography variant="h6" className="font-semibold">
          Our Esteemed Partners
        </Typography>
      </div>

      <Grid container spacing={4}>
        {partners.map((partner, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card className="shadow-lg">
              <CardContent className="text-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
                <Typography variant="h6" className="font-semibold mb-2">
                  {partner.name}
                </Typography>
                <Typography variant="body2">
                  {partner.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Partners;

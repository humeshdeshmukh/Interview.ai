import React from 'react';
import { Container, Typography, Card, CardContent, Button, Grid, Divider } from '@mui/material';
import { FaDollarSign, FaStar } from 'react-icons/fa';

const SubscriptionPlan = ({ plan, price, features }: { plan: string, price: string, features: string[] }) => (
  <Card className="shadow-lg">
    <CardContent className="text-center">
      <Typography variant="h5" className="font-semibold mb-2">
        {plan}
      </Typography>
      <Typography variant="h6" className="text-gray-700 mb-4">
        {price}
      </Typography>
      <Divider className="my-4" />
      <ul className="list-disc list-inside mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600">
            {feature}
          </li>
        ))}
      </ul>
      <Button variant="contained" color="primary">
        Subscribe
      </Button>
    </CardContent>
  </Card>
);

const Subscriptions: React.FC = () => {
  return (
    <Container maxWidth="lg" className="py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Subscriptions
      </Typography>
      <div className="mb-6 flex items-center">
        <FaDollarSign className="text-3xl text-green-500 mr-4" />
        <Typography variant="h6" className="font-semibold">
          Choose Your Plan
        </Typography>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <SubscriptionPlan
            plan="Basic"
            price="$19/month"
            features={[
              "Access to basic features",
              "Email support",
              "Monthly reports",
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SubscriptionPlan
            plan="Pro"
            price="$49/month"
            features={[
              "Access to all features",
              "Priority support",
              "Weekly reports",
              "Advanced analytics",
            ]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SubscriptionPlan
            plan="Premium"
            price="$99/month"
            features={[
              "All Pro features",
              "Dedicated account manager",
              "24/7 support",
              "Custom integrations",
            ]}
          />
        </Grid>
      </Grid>

      <div className="mt-8">
        <Typography variant="h6" className="font-semibold mb-4">
          Manage Your Subscription
        </Typography>
        <Button variant="contained" color="secondary" className="mr-4">
          View My Subscription
        </Button>
        <Button variant="outlined" color="secondary">
          Upgrade Plan
        </Button>
      </div>
    </Container>
  );
};

export default Subscriptions;

import React from 'react';
import { Button, Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import { FaChartLine, FaTasks, FaUser } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="page-content max-w-screen-lg mx-auto px-4 py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Dashboard
      </Typography>

      <Typography variant="body1" className="text-lg mb-6">
        Your dashboard for managing interview preparation resources.
      </Typography>

      <Grid container spacing={4}>
        {/* Overview Card */}
        <Grid item xs={12} md={4}>
          <Card className="shadow-lg">
            <CardContent>
              <div className="flex items-center mb-4">
                <FaChartLine className="text-3xl text-blue-500 mr-4" />
                <Typography variant="h6" className="font-semibold">
                  Overview
                </Typography>
              </div>
              <Typography variant="body1" className="mb-4">
                Get a summary of your progress and achievements in interview preparation.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                View Overview
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activity Card */}
        <Grid item xs={12} md={4}>
          <Card className="shadow-lg">
            <CardContent>
              <div className="flex items-center mb-4">
                <FaTasks className="text-3xl text-green-500 mr-4" />
                <Typography variant="h6" className="font-semibold">
                  Recent Activity
                </Typography>
              </div>
              <Typography variant="body1" className="mb-4">
                Check out the latest updates and recent activities related to your interview preparation.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                View Activity
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Profile Card */}
        <Grid item xs={12} md={4}>
          <Card className="shadow-lg">
            <CardContent>
              <div className="flex items-center mb-4">
                <FaUser className="text-3xl text-orange-500 mr-4" />
                <Typography variant="h6" className="font-semibold">
                  Your Profile
                </Typography>
              </div>
              <Typography variant="body1" className="mb-4">
                Update your personal information and settings for a more customized experience.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider className="my-8" />

      {/* Quick Links */}
      <Typography variant="h6" className="text-2xl font-semibold mb-4">
        Quick Links
      </Typography>
      <div className="space-y-4">
        <Button variant="outlined" color="primary" fullWidth>
          Resume Builder
        </Button>
        <Button variant="outlined" color="primary" fullWidth>
          Interview Questions
        </Button>
        <Button variant="outlined" color="primary" fullWidth>
          Practice Tests
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;

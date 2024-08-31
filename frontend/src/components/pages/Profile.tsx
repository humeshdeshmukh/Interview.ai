import React from 'react';
import { Container, Typography, Avatar, Button, TextField, Grid, Card, CardContent } from '@mui/material';
import { FaUser } from 'react-icons/fa';

const Profile: React.FC = () => {
  return (
    <Container maxWidth="md" className="py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Profile
      </Typography>

      <div className="mb-6 flex items-center">
        <FaUser className="text-3xl text-blue-500 mr-4" />
        <Typography variant="h6" className="font-semibold">
          User Information
        </Typography>
      </div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4} className="flex justify-center">
          <Card className="shadow-lg w-full">
            <CardContent className="text-center">
              <Avatar
                alt="User Avatar"
                src="https://via.placeholder.com/150"
                sx={{ width: 150, height: 150, margin: '0 auto', mb: 2 }}
              />
              <Typography variant="h6" className="font-semibold mb-2">
                John Doe
              </Typography>
              <Typography variant="body2" color="textSecondary">
                johndoe@example.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card className="shadow-lg">
            <CardContent>
              <Typography variant="h6" className="font-semibold mb-4">
                Edit Profile
              </Typography>
              <form noValidate autoComplete="off" className="space-y-4">
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  defaultValue="John Doe"
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  defaultValue="johndoe@example.com"
                />
                <TextField
                  label="Bio"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  defaultValue="A brief bio about yourself."
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;

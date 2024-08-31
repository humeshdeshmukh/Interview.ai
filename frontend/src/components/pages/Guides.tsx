import React from 'react';
import { Button, Card, CardContent, Typography, Grid, TextField } from '@mui/material';
import { FaBook } from 'react-icons/fa';

const Guides: React.FC = () => {
  return (
    <div className="page-content max-w-screen-lg mx-auto px-4 py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Guides
      </Typography>

      {/* Search Bar */}
      <div className="mb-8 flex items-center">
        <TextField
          label="Search Guides"
          id="search"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: <FaBook className="text-gray-500 mr-2" />,
          }}
        />
      </div>

      {/* Guides List */}
      <Grid container spacing={4}>
        {[1, 2, 3, 4, 5].map((guide, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card className="shadow-lg">
              <CardContent>
                <div className="flex items-center mb-4">
                  <FaBook className="text-3xl text-blue-500 mr-4" />
                  <Typography variant="h6" className="font-semibold">
                    Guide Title {guide}
                  </Typography>
                </div>
                <Typography variant="body1" className="mb-4">
                  A brief description of the guide. This could include the topics covered and what readers can expect to learn.
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Read Guide
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Guides;

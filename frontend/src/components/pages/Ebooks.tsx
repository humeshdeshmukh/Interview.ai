import React from 'react';
import { Button, Card, CardContent, Typography, Grid, TextField } from '@mui/material';
import { FaBookOpen, FaSearch } from 'react-icons/fa';

const Ebooks: React.FC = () => {
  return (
    <div className="page-content max-w-screen-lg mx-auto px-4 py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        E-books
      </Typography>

      {/* Search Bar */}
      <div className="mb-8 flex items-center">
        <TextField
          label="Search E-books"
          id="search"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: <FaSearch className="text-gray-500 mr-2" />,
          }}
        />
      </div>

      {/* E-books List */}
      <Grid container spacing={4}>
        {[1, 2, 3, 4].map((ebook, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card className="shadow-lg">
              <CardContent>
                <div className="flex items-center mb-4">
                  <FaBookOpen className="text-3xl text-blue-500 mr-4" />
                  <Typography variant="h6" className="font-semibold">
                    E-book Title {ebook}
                  </Typography>
                </div>
                <Typography variant="body1" className="mb-4">
                  A brief description of the e-book. This could include the topics covered and what readers can expect to learn.
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Download Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Ebooks;

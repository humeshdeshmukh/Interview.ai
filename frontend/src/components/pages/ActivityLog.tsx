import React from 'react';
import { Button, Typography, Paper, Divider } from '@mui/material';
import { FaFilter, FaSort } from 'react-icons/fa';

const ActivityLog: React.FC = () => {
  // Dummy data for the activity log
  const activities = [
    { id: 1, type: 'Login', description: 'User logged in', timestamp: '2024-08-30 10:00 AM' },
    { id: 2, type: 'Logout', description: 'User logged out', timestamp: '2024-08-30 11:00 AM' },
    { id: 3, type: 'Update', description: 'User updated profile', timestamp: '2024-08-31 09:30 AM' },
  ];

  return (
    <div className="page-content max-w-screen-lg mx-auto px-4 py-8">
      <Typography variant="h1" className="text-4xl font-bold mb-6">
        Activity Log
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
        <Button variant="contained" color="primary" className="shadow-lg">
          Export Log
        </Button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <Paper key={activity.id} className="p-4 shadow-lg">
            <Typography variant="h6" className="font-semibold mb-2">
              {activity.type}
            </Typography>
            <Typography variant="body2" className="mb-2">
              {activity.description}
            </Typography>
            <Divider className="my-2" />
            <Typography variant="caption" color="textSecondary">
              {activity.timestamp}
            </Typography>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;

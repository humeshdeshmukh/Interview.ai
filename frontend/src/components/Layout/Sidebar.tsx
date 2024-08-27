// src/components/Layout/Sidebar.tsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      className="bg-gray-800 text-white"
    >
      <div className="flex items-center justify-between p-4 bg-gray-900">
        <h2 className="text-xl font-bold">Menu</h2>
        <IconButton onClick={onClose} className="text-white">
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/resume-builder">
          <ListItemText primary="Resume Builder" />
        </ListItem>
        <ListItem button component={Link} to="/interview-questions">
          <ListItemText primary="Interview Questions" />
        </ListItem>
        <ListItem button component={Link} to="/practice-tests">
          <ListItemText primary="Practice Tests" />
        </ListItem>
        {/* Add more items as needed */}
      </List>
    </Drawer>
  );
};

export default Sidebar;

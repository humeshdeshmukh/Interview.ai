import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, AccountCircle as AccountCircleIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Avatar, Tooltip } from '@mui/material';
import './Header.css'; // Optional custom CSS for additional styling

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [search, setSearch] = useState('');
  const [notifications, setNotifications] = useState(3); // Example notification count

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-md">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white font-bold">
          INTERVIEWMASTERY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/resume-builder">Resume Builder</Nav.Link>
            <Nav.Link as={Link} to="/interview-questions">Interview Questions</Nav.Link>
            <Nav.Link as={Link} to="/practice-tests">Practice Tests</Nav.Link>
            <NavDropdown title="Resources" id="resources-dropdown">
              <NavDropdown.Item as={Link} to="/blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tutorials">Tutorials</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guides">Guides</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex align-items-center ml-auto">
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-2"
                value={search}
                onChange={handleSearchChange}
              />
              <Button variant="outline-light">
                <SearchIcon />
              </Button>
            </Form>
            <Tooltip title="Notifications">
              <IconButton color="inherit" className="ml-2 text-white position-relative">
                <NotificationsIcon />
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {notifications}
                </Badge>
              </IconButton>
            </Tooltip>
            <IconButton
              edge="end"
              color="inherit"
              aria-controls="user-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              className="ml-2 text-white"
            >
              <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
            </IconButton>
            <Menu
              id="user-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              className="bg-dark text-white"
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/profile" className="text-white hover:text-blue-400">Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/settings" className="text-white hover:text-blue-400">Settings</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/logout" className="text-white hover:text-blue-400">Logout</Link>
              </MenuItem>
            </Menu>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

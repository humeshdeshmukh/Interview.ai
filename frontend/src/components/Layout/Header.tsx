import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'; // Assuming you're using react-bootstrap

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/resume">Resume Builder</Nav.Link>
      <Nav.Link as={Link} to="/questions">Interview Questions</Nav.Link>
      <Nav.Link as={Link} to="/practice">Practice Tests</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;

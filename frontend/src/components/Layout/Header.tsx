import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="header-brand">
          <img src="/path-to-your-logo.png" alt="Logo" className="header-logo" />
          <span className="header-title">Home</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link as any} to="/resume">Resume Builder</Nav.Link>
            <Nav.Link as={Link as any} to="/questions">Interview Questions</Nav.Link>
            <Nav.Link as={Link as any} to="/practice">Practice Tests</Nav.Link>
            <Nav.Link as={Link as any} to="/mock-interview">Mock Interviews</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link as any} to="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link as any} to="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link as any} to="/faq">FAQ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex ml-auto search-form">
            <FormControl type="text" placeholder="Search" className="mr-2 search-input" />
            <Button variant="outline-light" className="search-button">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Button as={Link as any} to="/login" variant="outline-light" className="me-2">
              Login
            </Button>
            <Button as={Link as any} to="/register" variant="outline-light">
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

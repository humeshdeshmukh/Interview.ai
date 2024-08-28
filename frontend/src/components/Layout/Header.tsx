import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';
import logo from './logo.jpg'; // Import the logo image

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="header-logo" /> {/* Use the imported logo */}
          <span className="header-title ms-2">InterviewMastery</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/resume">Resume Builder</Nav.Link>
            <Nav.Link as={Link} to="/questions">Interview Questions</Nav.Link>
            <Nav.Link as={Link} to="/practice-tests">Practice Tests</Nav.Link>
            <Nav.Link as={Link} to="/mock-interview">Mock Interviews</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex ms-auto">
            <FormControl type="text" placeholder="Search" className="me-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav className="ms-3">
            <Button as={Link} to="/login" variant="outline-light" className="me-2">
              Login
            </Button>
            <Button as={Link} to="/register" variant="outline-light">
              Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

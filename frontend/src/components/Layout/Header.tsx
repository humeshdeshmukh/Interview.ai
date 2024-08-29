import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import './Header.css';
import logo from '../../assets/logo.jpg';
import profilePic from '../../assets/Profile-pic.webp';

interface HeaderProps {
  onToggleSidebar?: () => void; // Make onToggleSidebar optional
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="header-logo" />
          <span className="header-title ms-2">InterviewMastery</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={onToggleSidebar} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Added Home link */}
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
          <Nav className="ms-auto">
            <NavDropdown
              title={
                <div className="d-flex align-items-center">
                  <img src={profilePic} alt="Profile" className="profile-picture" />
                  <span className="profile-title ms-2">Profile</span>
                </div>
              }
              id="basic-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item as={Link} to="/profile">View Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
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

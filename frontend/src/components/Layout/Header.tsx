import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext'; // Ensure this path is correct
import './Header.css'; // Ensure this path is correct
import logo from '../../assets/logo.jpg'; // Ensure this path is correct
import profilePic from '../../assets/Profile-pic.webp'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { user, logout } = useAuth(); // Use the hook

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="header-logo" />
          <span className="header-title ms-2">InterviewMaster.Ai</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={onToggleSidebar} className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/resume" className="nav-link">Resume Builder</Nav.Link>
            <Nav.Link as={Link} to="/questions" className="nav-link">Interview Questions</Nav.Link>
            <Nav.Link as={Link} to="/practice-tests" className="nav-link">Practice Tests</Nav.Link>
            <Nav.Link as={Link} to="/mock-interview" className="nav-link">Mock Interviews</Nav.Link>

            <NavDropdown title="Resources" id="resources-dropdown" className="nav-link">
              <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/webinars">Webinars</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ebooks">E-books</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/case-studies">Case Studies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guides">Guides</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/templates">Templates</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tools">Tools</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Support" id="support-dropdown" className="nav-link">
              <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/customer-support">Customer Support</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tutorials">Tutorials</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/feedback">Feedback</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/report-issue">Report an Issue</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/live-chat">Live Chat</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="About Us" id="about-us-dropdown" className="nav-link">
              <NavDropdown.Item as={Link} to="/company">Company</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/team">Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/careers">Careers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/press">Press</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/partners">Partners</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-auto d-flex align-items-center">
            {user ? (
              <NavDropdown
                title={
                  <div className="d-flex align-items-center">
                    <img src={profilePic} alt="Profile" className="profile-picture" />
                    <span className="profile-title ms-2">{user.name}</span>
                  </div>
                }
                id="profile-dropdown"
                align="end"
                className="nav-link"
              >
                <NavDropdown.Item as={Link} to="/profile">View Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/activity-log">Activity Log</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/subscriptions">Subscriptions</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div className="d-flex">
                <Button as={Link} to="/login" variant="outline-light" className="me-2">
                  Login
                </Button>
                <Button as={Link} to="/register" variant="outline-light">
                  Register
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

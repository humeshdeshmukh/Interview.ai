import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Header.css';
import logo from '../../assets/logo.jpg'; // Ensure this path is correct
import profilePic from '../../assets/Profile-pic.webp'; // Ensure this path is correct

const Header: React.FC = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`header-navbar ${isSticky ? 'sticky' : ''}`}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="header-logo" />
          <span className="header-title ms-2">InterviewMaster.ai</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/resume" className="nav-link">Resume Builder</Nav.Link>
            <Nav.Link as={Link} to="/questions" className="nav-link">Interview Questions</Nav.Link>
            <Nav.Link as={Link} to="/practice-tests" className="nav-link">Practice Tests</Nav.Link>

            <NavDropdown title="Mock Interviews" id="mock-interview-dropdown" className="nav-dropdown">
              <NavDropdown.Item as={Link} to="/mock-interview">Traditional Mock Interviews</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ai-interview">AI Interview</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resources" id="resources-dropdown" className="nav-dropdown">
              <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/webinars">Webinars</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ebooks">E-books</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/case-studies">Case Studies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guides">Guides</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/templates">Templates</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tools">Tools</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Support" id="support-dropdown" className="nav-dropdown">
              <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/customer-support">Customer Support</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tutorials">Tutorials</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/feedback">Feedback</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/report-issue">Report an Issue</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/live-chat">Live Chat</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="About Us" id="about-us-dropdown" className="nav-dropdown">
              <NavDropdown.Item as={Link} to="/company">Company</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/team">Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/careers">Careers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/press">Press</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/partners">Partners</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-auto d-flex align-items-center">
            <NavDropdown
              title={
                <div className="d-flex align-items-center">
                  <img src={profilePic} alt="Profile" className="profile-picture" />
                  <span className="profile-title ms-2">User Name</span>
                </div>
              }
              id="profile-dropdown"
              align="end"
              className="nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/profile">View Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/activity-log">Activity Log</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/subscriptions">Subscriptions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

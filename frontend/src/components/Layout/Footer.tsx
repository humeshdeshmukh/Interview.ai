import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Chatbot from '../Chatbot/Chatbot'; // Correct path to your Chatbot component
import './Footer.css'; // Ensure you have appropriate styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3>InterviewMaster.ai</h3>
          <p>Empowering your interview preparation with advanced tools and resources.</p>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/resume-builder">Resume Builder</Link></li>
            <li><Link to="/interview-questions">Interview Questions</Link></li>
            <li><Link to="/practice-tests">Practice Tests</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-info">
          <h4>Contact Info</h4>
          <p>Email: <a href="mailto:info@interviewmaster.ai">info@interviewmaster.ai</a></p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Interview St, Suite 456, Prep City, PC 78901</p>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-section newsletter">
          <h4>Subscribe to Our Newsletter</h4>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Chatbot Integration */}
        <div className="footer-section chatbot">
          <Chatbot />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

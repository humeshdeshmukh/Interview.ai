import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import Chatbot from '../Chatbot/Chatbot'; // Correct path to your Chatbot component
import './Footer.css'; // Ensure you have appropriate styles

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-8">
      <div className="footer-container max-w-screen-xl mx-auto px-4 flex flex-wrap justify-between gap-8">
        
        {/* Company Info */}
        <div className="footer-section flex-1">
          <h3 className="text-2xl font-bold mb-4">InterviewMaster.ai</h3>
          <p className="mb-4">Empowering your interview preparation with advanced tools and resources.</p>
          <div className="social-media flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-gray-400 hover:text-white transition">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section flex-1">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/resume-builder" className="hover:underline">Resume Builder</Link></li>
            <li><Link to="/interview-questions" className="hover:underline">Interview Questions</Link></li>
            <li><Link to="/practice-tests" className="hover:underline">Practice Tests</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section flex-1">
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <p className="mb-2">Email: <a href="mailto:info@interviewmaster.ai" className="hover:underline">info@interviewmaster.ai</a></p>
          <p className="mb-2">Phone: +123 456 7890</p>
          <p className="mb-2">Address: 123 Interview St, Suite 456, Prep City, PC 78901</p>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-section flex-1">
          <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form className="newsletter-form flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
              className="p-2 rounded border border-gray-600 bg-gray-900 text-white"
            />
            <button type="submit" className="p-2 bg-blue-600 hover:bg-blue-700 rounded text-white">Subscribe</button>
          </form>
        </div>

        {/* Chatbot Integration */}
        <div className="footer-section flex-1">
          <Chatbot />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

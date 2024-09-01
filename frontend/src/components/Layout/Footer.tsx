import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import Chatbot from '../Chatbot/Chatbot'; // Ensure this path matches your actual file structure
import './Footer.css'; // Ensure you have appropriate styles in Footer.css

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-black text-white py-10">
      <div className="footer-container max-w-screen-xl mx-auto px-4 flex flex-wrap justify-between gap-12">
        
        {/* Company Info */}
        <div className="footer-section flex-1 min-w-[250px]">
          <h3 className="text-3xl font-bold mb-4">InterviewMaster.ai</h3>
          <p className="mb-4 text-lg">Empowering your interview preparation with advanced tools and resources.</p>
          <div className="social-media flex gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <FaFacebookF size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
              <FaTwitter size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <FaLinkedinIn size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <FaInstagram size={28} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github" className="social-icon">
              <FaGithub size={28} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section flex-1 min-w-[250px]">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-lg">
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/resume-builder" className="hover:underline">Resume Builder</Link></li>
            <li><Link to="/interview-questions" className="hover:underline">Interview Questions</Link></li>
            <li><Link to="/practice-tests" className="hover:underline">Practice Tests</Link></li>
            <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section flex-1 min-w-[250px]">
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <p className="mb-3 text-lg">Email: <a href="mailto:info@interviewmaster.ai" className="hover:underline">info@interviewmaster.ai</a></p>
          <p className="mb-3 text-lg">Phone: <a href="tel:+91284330238" className="hover:underline">9284330238</a></p>
          <p className="text-lg">Address: Nagpur, Maharashtra, India</p>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-section flex-1 min-w-[250px]">
          <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form className="newsletter-form flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
              className="p-3 rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="p-3 bg-blue-700 hover:bg-blue-800 rounded text-white transition">Subscribe</button>
          </form>
        </div>

        {/* Chatbot Integration */}
        <div className="footer-section flex-1 min-w-[250px] flex items-center justify-center">
          <Chatbot />
        </div>
      </div>

      <div className="footer-bottom text-center text-gray-400 py-4 border-t border-gray-800">
        <p>© 2024 InterviewMaster.ai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

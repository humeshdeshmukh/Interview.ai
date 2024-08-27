import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Footer.css'; // Import custom styles for the footer

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-3 mb-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#about-us" className="text-light">About Us</a></li>
              <li><a href="#services" className="text-light">Services</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
              <li><a href="#careers" className="text-light">Careers</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-3 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex flex-column">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mb-2">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mb-2">Facebook</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light mb-2">LinkedIn</a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="col-md-3 mb-3">
            <h5>Newsletter</h5>
            <form className="d-flex flex-column">
              <input type="email" className="form-control mb-2" placeholder="Your email address" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>

          {/* Legal Information */}
          <div className="col-md-3 mb-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#privacy-policy" className="text-light">Privacy Policy</a></li>
              <li><a href="#terms-of-service" className="text-light">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Chatbot */}
        <div className="text-center mt-4">
          <button className="btn btn-info" onClick={() => window.open('https://your-chatbot-link.com', '_blank')}>
            Chat with us
          </button>
          <p className="mt-2">Have questions? Our AI chatbot is here to help!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

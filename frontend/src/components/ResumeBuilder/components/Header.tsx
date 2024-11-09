import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="resume-header">
      <div className="flex items-center justify-between">
        <h1>Resume Builder</h1>
        <button
          onClick={toggleMenu}
          className="toggle-button"
        >
          {isOpen ? '✖' : '☰'}
        </button>
        <nav className="nav-links">
          <ul className="flex space-x-4">
            <li><Link to="/resume-builder">Resume Builder</Link></li>
            <li><Link to="/personal-details">Personal Details</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/language-skills">Language Skills</Link></li>
            <li><Link to="/references">References</Link></li>
            <li><Link to="/summary">Summary</Link></li>
            <li><Link to="/declaration">Declaration</Link></li>
            <li><Link to="/template-selector">Templates</Link></li>
            <li><Link to="/resume-preview">Preview</Link></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="mobile-menu">
          <ul className="space-y-2">
            <li><Link to="/resume-builder" onClick={toggleMenu}>Resume Builder</Link></li>
            <li><Link to="/personal-details" onClick={toggleMenu}>Personal Details</Link></li>
            <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
            <li><Link to="/experience" onClick={toggleMenu}>Experience</Link></li>
            <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/certifications" onClick={toggleMenu}>Certifications</Link></li>
            <li><Link to="/language-skills" onClick={toggleMenu}>Language Skills</Link></li>
            <li><Link to="/references" onClick={toggleMenu}>References</Link></li>
            <li><Link to="/summary" onClick={toggleMenu}>Summary</Link></li>
            <li><Link to="/declaration" onClick={toggleMenu}>Declaration</Link></li>
            <li><Link to="/template-selector" onClick={toggleMenu}>Templates</Link></li>
            <li><Link to="/resume-preview" onClick={toggleMenu}>Preview</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">Resume Builder</h1>
            <p className="header-subtitle">Create a professional resume in minutes</p>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Personal Details</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/references">References</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/certifications">Certifications</Link></li>
                    <li><Link to="/languages">Languages</Link></li>
                    <li><Link to="/declaration">Declaration</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

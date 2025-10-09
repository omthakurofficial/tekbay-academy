import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { getAssetPath } from '../../utils/assetUtils';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    closeMenu();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src={getAssetPath('/images/logo.png')}
                 alt="TekBay" 
                 className="logo-image" />
            <span className="logo-text">
              <span className="logo-tek">Tek</span>
              <span className="logo-bay">Bay</span>
            </span>
          </Link>
          <div className="mobile-menu-button" onClick={toggleMenu}>
            <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="logo-link" style={{ display: 'none' }}>Home</Link>
            <button onClick={() => handleNavClick('program')} className="nav-link nav-button">Program</button>
            <button onClick={() => handleNavClick('benefits')} className="nav-link nav-button">Benefits</button>
            <a href="https://learn.tekbay.digital" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={closeMenu}>LMS Access</a>
            <button onClick={() => handleNavClick('pricing')} className="nav-link nav-button">Pricing</button>
            <button onClick={() => handleNavClick('faqs')} className="nav-link nav-button">FAQs</button>
            <button onClick={() => handleNavClick('contact')} className="nav-link nav-button cta-button">Join Now</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

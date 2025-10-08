import React, { useState, useEffect } from 'react';
import './Header.css';
import { getAssetPath, getUnsplashImage } from '../../utils/assetUtils';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
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

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={getAssetPath('/images/logo.png')}
                 alt="TekBay" 
                 className="logo-image" />
            <span className="logo-text">
              <span className="logo-tek">Tek</span>
              <span className="logo-bay">Bay</span>
            </span>
          </div>
          <div className="mobile-menu-button" onClick={toggleMenu}>
            <div className={`menu-icon ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#program" className="nav-link" onClick={closeMenu}>Program</a>
            <a href="#benefits" className="nav-link" onClick={closeMenu}>Benefits</a>
            <a href="#pricing" className="nav-link" onClick={closeMenu}>Pricing</a>
            <a href="#contact" className="nav-link cta-button" onClick={closeMenu}>Join Now</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

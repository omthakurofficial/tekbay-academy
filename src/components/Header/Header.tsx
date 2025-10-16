import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { getAssetPath } from '../../utils/assetUtils';

const Header: React.FC<{ onJoinNow?: () => void }> = ({ onJoinNow }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (aboutDropdownOpen && !target.closest('.nav-dropdown')) {
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [aboutDropdownOpen]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutDropdownOpen(false);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const handleAboutTekBayClick = () => {
    closeMenu();
    window.open('https://tekbay.digital', '_blank');
  };

  const handleAboutAcademyClick = () => {
    closeMenu();
    if (location.pathname !== '/about-academy') {
      navigate('/about-academy');
    }
  };

  const handleJoinNow = () => {
    closeMenu();
    if (onJoinNow) {
      onJoinNow();
    }
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
            <img src={getAssetPath('/images/Logo Horizontal.png')}
                 alt="TekBay Academy" 
                 className="logo-image" />
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
            <div className="nav-dropdown">
              <button 
                onClick={toggleAboutDropdown} 
                className="nav-link nav-button dropdown-toggle"
                aria-expanded={aboutDropdownOpen}
              >
                About Us
                <span className={`dropdown-arrow ${aboutDropdownOpen ? 'open' : ''}`}>▾</span>
              </button>
              {aboutDropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={handleAboutAcademyClick} className="dropdown-item">
                    About TekBay Academy
                  </button>
                  <button onClick={handleAboutTekBayClick} className="dropdown-item">
                    About TekBay
                  </button>
                </div>
              )}
            </div>
            <button onClick={() => handleNavClick('program')} className="nav-link nav-button">Program</button>
            <a href="https://learn.tekbay.academy" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={closeMenu}>LMS Access</a>
            <button onClick={() => handleNavClick('pricing')} className="nav-link nav-button">Pricing</button>
            <button onClick={() => handleNavClick('faqs')} className="nav-link nav-button">FAQs</button>
            <button onClick={handleJoinNow} className="nav-link nav-button cta-button">Join Now</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

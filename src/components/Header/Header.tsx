import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/images/logo.png" alt="TekBay" className="logo-image" />
            <span className="logo-text">
              <span className="logo-tek">Tek</span>
              <span className="logo-bay">Bay</span>
            </span>
          </div>
          <nav className="nav">
            <a href="#program" className="nav-link">Program</a>
            <a href="#benefits" className="nav-link">Benefits</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#contact" className="nav-link cta-button">Join Now</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

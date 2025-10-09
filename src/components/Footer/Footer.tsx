import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { getAssetPath } from '../../utils/assetUtils';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={getAssetPath('/images/logo.png')}
                   alt="TekBay" 
                   className="footer-logo-image" />
              <span className="footer-logo-text">
                <span className="logo-tek">Tek</span>
                <span className="logo-bay">Bay</span>
              </span>
            </div>
            <p className="footer-tagline">
              Your Bridge to the Cloud
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Program</h4>
              <ul className="footer-list">
                <li><a href="#program">Cloud Apprenticeship</a></li>
                <li><a href="#benefits">Benefits</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-list">
                <li><a href="mailto:apprentice@tekbay.digital">apprentice@tekbay.digital</a></li>
                <li><a href="#contact">Get in Touch</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-list">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} TekBay. All rights reserved.
          </p>
          <div className="footer-cta">
            <a href="mailto:apprentice@tekbay.digital" className="footer-button">
              Start Your Cloud Career Today - Join Now
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

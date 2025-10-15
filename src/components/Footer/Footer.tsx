import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { getAssetPath } from '../../utils/assetUtils';

interface FooterProps {
  onJoinNow?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onJoinNow }) => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={getAssetPath('/images/Logo Horizontal.png')}
                   alt="TekBay Academy" 
                   className="footer-logo-image" />
            </div>
            <p className="footer-tagline">
              Your Bridge to the Cloud
            </p>
            
            
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Contact Us</h4>
              <ul className="footer-list">
                <li><a href="mailto:apprenticeship@tekbay.digital">apprenticeship@tekbay.digital</a></li>
              </ul>
              
              <div className="footer-locations">
                <div className="location-section">
                  <h5 className="location-title">India:</h5>
                  <p className="location-address">
                    K-7, Kirti Nagar,<br />
                    New Delhi - 110015<br />
                    India
                  </p>
                </div>
                
                <div className="location-section">
                  <h5 className="location-title">Nepal:</h5>
                  <p className="location-address">
                    Behind Swiss Embassy, Ekantakuna,<br />
                    Lalitpur - 44700
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">About</h4>
              <ul className="footer-list">
                <li><Link to="/about-academy">About Academy</Link></li>
                <li><a href="https://tekbay.digital" target="_blank" rel="noopener noreferrer">About TekBay</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Program</h4>
              <ul className="footer-list">
                <li><a href="#program">Cloud Apprenticeship</a></li>
                <li><a href="#benefits">Benefits</a></li>
                <li><a href="#pricing">Pricing</a></li>
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
            <button onClick={onJoinNow} className="footer-button">
              Start Your Cloud Career Today - Join Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

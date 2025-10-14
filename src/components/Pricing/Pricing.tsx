import React from 'react';
import './Pricing.css';
import { getAssetPath } from '../../utils/assetUtils';

const Pricing: React.FC = () => {
  const features = [
    {
      icon: '🏆',
      title: 'Global Certification',
      description: 'of AWS worth $150',
    },
    {
      icon: '💰',
      title: 'Fully Refundable',
      description: 'Program INR 9997*',
    },
    {
      icon: '💻',
      title: 'Chance to win',
      description: 'MacBook**',
    },
    {
      icon: '🤝',
      title: 'Networking and',
      description: 'Career Opportunities',
    },
  ];

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="pricing-content">
          <div className="pricing-image-section">
            <div className="pricing-image">
              <img src={getAssetPath('/student-macbook.jpg')} alt="Student with MacBook" />
            </div>
            
            <div className="terms">
              <h4 className="terms-title">Terms & Conditions</h4>
              <p className="terms-text">
                * Fully Refundable when you pass the AWS Exam. Subjected to Taxes.<br />
                ** Lucky draw among Top Scorers (Above 990) to win MacBook every 6 months.
              </p>
            </div>
          </div>

          <div className="pricing-details">
            <div className="title-section">
              <div className="title-decoration"></div>
              <h2 className="pricing-title">
                TekBay AWS<br />
                Apprenticeship Program
              </h2>
            </div>
            
            <div className="refund-banner">
              <h3 className="refund-title">100%<br />REFUND</h3>
              <p className="refund-subtitle">on Certification!</p>
            </div>

            <div className="price-box">
              <div className="price-original">
                Originally<br />
                <span className="price-striked">₹20,000</span>
              </div>
              <div className="price-offer">
                Limited time offer<br />
                <span className="price-current">₹9,997</span>
                <p className="price-note">Inclusive of AWS Exam Fee Worth USD 150</p>
              </div>
            </div>

            <h3 className="features-title">WHY OUR PROGRAM?</h3>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import { getAssetPath } from '../../utils/assetUtils';

interface HeroProps {
  onJoinNow?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinNow }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/about-academy');
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>🚀 Start Your Cloud Journey</span>
            </div>
            <h1 className="hero-title">
              Learn Cloud,<br />
              <span className="title-accent">Build Your</span><br />
              Future
            </h1>
            <p className="hero-subtitle">
              From Zero to AWS Certified Cloud Hero in Just 8 Weeks!<br />
              <span className="subtitle-highlight">Join 1000+ students who transformed their careers</span>
            </p>
            <div className="hero-cta">
              <button className="btn-primary" onClick={onJoinNow}>Start Learning Today</button>
              <button className="btn-secondary" onClick={handleReadMore}>Read More</button>
            </div>
            <div className="hero-stats">
              {/* <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Job Placement</span>
              </div> */}
              <div className="stat">
                <span className="stat-number">8 Weeks</span>
                <span className="stat-label">To Certification</span>
              </div>
              <div className="stat">
                <span className="stat-number">350+</span>
                <span className="stat-label">Get Certified</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-image-bg"></div>
              <img src={getAssetPath('/images/hero-programming-students.jpg')} alt="Students learning cloud computing and programming skills" className="hero-image" />
              <div className="floating-elements">
                <div className="floating-card card-1">
                  <div className="card-icon">🏆</div>
                  <div className="card-text">AWS Certified</div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">☁️</div>
                  <div className="card-text">Cloud Computing</div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">💼</div>
                  <div className="card-text">Career Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

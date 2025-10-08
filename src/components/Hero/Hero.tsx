import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Learn Cloud,<br />
              Build Your<br />
              Future
            </h1>
            <p className="hero-subtitle">
              From Zero to AWS Certified<br />
              Cloud Hero in Just 8 Weeks!
            </p>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80" alt="Happy students learning cloud computing" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

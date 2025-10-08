import React from 'react';
import './Hero.css';
import { getAssetPath, getUnsplashImage } from '../../utils/assetUtils';

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
            <img src={getAssetPath('/images/hero-students.jpg')} alt="Happy students learning cloud computing" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

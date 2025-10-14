import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PromoBanner.css';

interface PromoBannerProps {
  onJoinNow?: () => void;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ onJoinNow }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const location = useLocation();
  const navigate = useNavigate();

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7); // 7 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleNavigateToPricing = () => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById('pricing');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll to pricing
      const element = document.getElementById('pricing');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="promo-banner">
      <div 
        className="promo-banner-content" 
        onClick={handleNavigateToPricing}
        title="Click to view our pricing plans"
      >
        <button 
          className="promo-banner-close" 
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          aria-label="Close banner"
        >
          ✕
        </button>
        
        <div className="promo-banner-main">
          <div className="promo-badge">
            <span className="discount">100% REFUND</span>
            <span className="unlimited">Certification</span>
          </div>
          
          <div className="promo-text">
            <h2>Join us & get certified with 100% REFUND on Certification!</h2>
            <div className="countdown">
              <span>Limited time offer ends in: </span>
              <div className="countdown-timer">
                <span className="time-unit">
                  <span className="time-value">{timeLeft.days.toString().padStart(2, '0')}</span>
                  <span className="time-label">Days</span>
                </span>
                <span className="separator">:</span>
                <span className="time-unit">
                  <span className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <span className="time-label">Hrs</span>
                </span>
                <span className="separator">:</span>
                <span className="time-unit">
                  <span className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <span className="time-label">Min</span>
                </span>
                <span className="separator">:</span>
                <span className="time-unit">
                  <span className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <span className="time-label">Sec</span>
                </span>
              </div>
            </div>
          </div>
          
          <div className="promo-cta">
            <button 
              className="cta-button"
              onClick={(e) => {
                e.stopPropagation();
                if (onJoinNow) {
                  onJoinNow();
                }
              }}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
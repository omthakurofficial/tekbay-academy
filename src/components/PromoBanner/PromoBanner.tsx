import React, { useState, useEffect } from 'react';
import './PromoBanner.css';
import { useCountry } from '../../contexts/CountryContext';

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
  const { getCurrentPricing } = useCountry();
  const pricing = getCurrentPricing();

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

  if (!isVisible) return null;

  return (
    <div className="promo-banner">
      <div className="promo-banner-content">
        <button 
          className="promo-banner-close" 
          onClick={handleClose}
          aria-label="Close banner"
        >
          ✕
        </button>
        
        <div className="promo-banner-main">
          <div className="promo-text-section">
            <h2>Join us & get certified with 100% REFUND on Certification!</h2>
          </div>
          
          <div className="pricing-section">
            <div className="price-box">
              <span className="original-price">Originally {pricing.symbol}{pricing.originalPrice}</span>
              <span className="limited-offer">Limited time offer</span>
              <span className="offer-price">{pricing.symbol}{pricing.offerPrice}</span>
              <span className="exam-fee-note">Inclusive of AWS Exam Fee Worth USD 150</span>
            </div>
          </div>
          
          <div className="countdown-section">
            <span className="countdown-label">Limited time offer ends in:</span>
            <div className="countdown-timer">
              <div className="time-unit">
                <span className="time-value">{timeLeft.days.toString().padStart(2, '0')}</span>
                <span className="time-label">DAYS</span>
              </div>
              <span className="separator">:</span>
              <div className="time-unit">
                <span className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="time-label">HRS</span>
              </div>
              <span className="separator">:</span>
              <div className="time-unit">
                <span className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="time-label">MIN</span>
              </div>
              <span className="separator">:</span>
              <div className="time-unit">
                <span className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="time-label">SEC</span>
              </div>
            </div>
          </div>
          
          <div className="promo-cta">
            <button 
              className="cta-button"
              onClick={() => {
                if (onJoinNow) {
                  onJoinNow();
                }
              }}
            >
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
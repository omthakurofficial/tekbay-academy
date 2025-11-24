import React, { useState, useEffect, useCallback } from 'react';
import './Testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  techBackground: string;
  currentRole: string;
  feedback: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Nishant Karn",
      photo: "👨‍💻",
      techBackground: "Cloud Engineer",
      currentRole: "AWS Certified Solutions Architect – Associate",
      feedback: "This program has been a game-changer for me, deepening my AWS knowledge and boosting my confidence in designing cloud solutions. It has opened new career opportunities and strengthened my skills as a Cloud Engineer. Would I recommend it? Absolutely. The hands-on learning and real-world scenarios make it practical, relevant, and totally worth it."
    },
    {
      id: 2,
      name: "Bibek Chand",
      photo: "👨‍💼",
      techBackground: "Cloud Computing Professional",
      currentRole: "AWS Certified Solutions Architect – Associate",
      feedback: "This program has opened us to the world of cloud computing as a whole. How we can leverage different aws services to solve the problems effectively. This course laid the foundations for using aws effectively variety of ways. Yes. This course is very good and absolutely recommend to everyone"
    },
    {
      id: 3,
      name: "Utshab Subedi",
      photo: "👨‍💻",
      techBackground: "Cloud Professional",
      currentRole: "AWS Certified Solutions Architect – Associate",
      feedback: "The Cloud Apprenticeship Program has significantly accelerated my learning and career goals by providing hands-on experience with AWS under the guidance of industry-level expert trainers. The practical approach helped me build a strong foundation in cloud technologies while working on real-world projects. Additionally, the program offered valuable networking opportunities, allowing me to connect with like-minded professionals and expand my network. I would highly recommend this program to anyone looking to enhance their cloud skills and grow their career in the tech industry."
    },
    {
      id: 4,
      name: "Samir Limbu",
      photo: "👨‍💼",
      techBackground: "Cloud Professional",
      currentRole: "AWS Certified Solutions Architect – Associate",
      feedback: "The Cloud Apprenticeship Program has significantly accelerated my learning and career goals by providing hands-on experience with AWS under the guidance of industry-level expert trainers. The practical approach helped me build a strong foundation in cloud technologies while working on real-world projects. Additionally, the program offered valuable networking opportunities, allowing me to connect with like-minded professionals and expand my network. I would highly recommend this program to anyone looking to enhance their cloud skills and grow their career in the tech industry."
    },
    {
      id: 5,
      name: "Astitwo Pandey",
      photo: "👨‍🎓",
      techBackground: "Cloud Computing Enthusiast",
      currentRole: "AWS Certified Solutions Architect – Associate",
      feedback: "The AWS cert is highly recognized and to give to get this for practically free offers people with interest in cloud career a big leap. Through this program I learned how to develop as well as troubleshoot the problem which is needed for a career improvement."
    },
    {
      id: 6,
      name: "Rohit Gupta",
      photo: "👨‍🎯",
      techBackground: "QA Engineer with 2 years experience",
      currentRole: "AWS Certified Solutions Architect – Associate",
      feedback: "From testing to cloud security - TekBay made this career pivot possible. The practical labs and AWS certification preparation were outstanding."
    },
    {
      id: 7,
      name: "Anita Verma",
      photo: "👩‍💼",
      techBackground: "Manual Tester with 1 year experience",
      currentRole: "AWS Certified Solutions Architect – Associate",
      feedback: "I went from manual testing to designing cloud solutions! TekBay's mentorship and real-world projects gave me the confidence to excel in cloud engineering."
    },
    {
      id: 8,
      name: "Vishal Jain",
      photo: "👨‍🔧",
      techBackground: "System Administrator with 5 years experience",
      currentRole: "AWS Certified Solutions Architect – Associate",
      feedback: "After years in traditional IT, TekBay helped me modernize my skills. I'm now managing cloud infrastructure for a Fortune 500 company!"
    }
  ];

  const cardsToShow = 4; // Number of cards to show at once
  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Success Stories</h2>
          <p className="testimonials-subtitle">
            Hear from our graduates who transformed their careers with AWS certification
          </p>
        </div>

        <div className="testimonials-carousel">
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="testimonials-container">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-photo">
                      <span className="photo-placeholder">{testimonial.photo}</span>
                    </div>
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <p className="testimonial-role">{testimonial.currentRole}</p>
                    </div>
                  </div>

                  <div className="testimonial-content">
                    <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>

        {/* Statistics Cards Section */}
        <div className="statistics-section">
          <div className="statistics-grid">
            <div className="testimonials-stat-card">
              <div className="testimonials-stat-icon">🎓</div>
              <div className="testimonials-stat-content">
                <div className="testimonials-stat-number">350+</div>
                <div className="testimonials-stat-label">Successful Graduates</div>
              </div>
            </div>
            <div className="testimonials-stat-card">
              <div className="testimonials-stat-icon">🚀</div>
              <div className="testimonials-stat-content">
                <div className="testimonials-stat-number">90%</div>
                <div className="testimonials-stat-label">Placement Rate</div>
              </div>
            </div>
            <div className="testimonials-stat-card">
              <div className="testimonials-stat-icon">💰</div>
              <div className="testimonials-stat-content">
                <div className="testimonials-stat-number">50%+</div>
                <div className="testimonials-stat-label">Average Salary Increase</div>
              </div>
            </div>
            <div className="testimonials-stat-card">
              <div className="testimonials-stat-icon">⭐</div>
              <div className="testimonials-stat-content">
                <div className="testimonials-stat-number">4.9/5</div>
                <div className="testimonials-stat-label">Student Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
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
      name: "Priya Sharma",
      photo: "👩‍💻",
      techBackground: "Software Developer with 2 years experience",
      currentRole: "AWS Cloud Engineer at TCS",
      feedback: "TekBay's AWS certification program completely transformed my career. The hands-on projects and real-world scenarios helped me land a cloud engineer role."
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      photo: "👨‍💼",
      techBackground: "Network Administrator with 3 years experience",
      currentRole: "DevOps Engineer at Wipro",
      feedback: "I was stuck in traditional IT support for years. TekBay's program gave me the confidence to transition to DevOps. The certification opened doors I never thought possible."
    },
    {
      id: 3,
      name: "Sneha Patel",
      photo: "👩‍🔬",
      techBackground: "Recent Computer Science Graduate",
      currentRole: "Cloud Solutions Architect at Infosys",
      feedback: "As a fresher, TekBay's comprehensive training and placement support helped me secure a cloud architect position right out of college. Amazing program!"
    },
    {
      id: 4,
      name: "Amit Singh",
      photo: "👨‍💻",
      techBackground: "Java Developer with 4 years experience",
      currentRole: "Senior Cloud Engineer at Accenture",
      feedback: "The transition from traditional development to cloud was seamless with TekBay. I'm now leading cloud migration projects for enterprise clients."
    },
    {
      id: 5,
      name: "Kavya Reddy",
      photo: "👩‍🎓",
      techBackground: "Data Analyst with 3 years experience",
      currentRole: "Cloud Data Engineer at Microsoft",
      feedback: "TekBay helped me combine my data skills with cloud expertise. Now I'm working with cutting-edge cloud technologies at Microsoft!"
    },
    {
      id: 6,
      name: "Rohit Gupta",
      photo: "👨‍🎯",
      techBackground: "QA Engineer with 2 years experience",
      currentRole: "Cloud Security Specialist at IBM",
      feedback: "From testing to cloud security - TekBay made this career pivot possible. The practical labs and AWS certification preparation were outstanding."
    },
    {
      id: 7,
      name: "Anita Verma",
      photo: "👩‍💼",
      techBackground: "Manual Tester with 1 year experience",
      currentRole: "AWS Solutions Engineer at Cognizant",
      feedback: "I went from manual testing to designing cloud solutions! TekBay's mentorship and real-world projects gave me the confidence to excel in cloud engineering."
    },
    {
      id: 8,
      name: "Vishal Jain",
      photo: "👨‍🔧",
      techBackground: "System Administrator with 5 years experience",
      currentRole: "Cloud Infrastructure Manager at Dell",
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
                      <p className="testimonial-background">
                        Previously: {testimonial.techBackground}
                      </p>
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
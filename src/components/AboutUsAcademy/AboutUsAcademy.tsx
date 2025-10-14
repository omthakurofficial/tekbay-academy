import React from 'react';
import './AboutUsAcademy.css';

const AboutUsAcademy: React.FC = () => {
  return (
    <div className="about-us-academy">
      <div className="container">
        <div className="about-content">
          <header className="about-header">
            <h1 className="about-title">About the TekBay AWS Apprenticeship Program</h1>
            <p className="about-intro">
              Welcome to your direct path to a career in cloud technology. We created the TekBay AWS Apprenticeship for one simple reason: to give passionate learners like you the real-world skills and official certification you need to succeed, without the financial burden of traditional training.
            </p>
          </header>

          <div className="about-sections">
            <section className="about-section">
              <h2 className="section-title">Our Commitment to You: Free, Expert-Led Training</h2>
              <div className="section-content">
                <p>
                  We believe in your potential, and we're ready to invest in your future. That's why our comprehensive, 8-week training program is completely free.
                </p>
                <p>
                  To ensure a committed and focused learning environment for everyone, we simply ask for a fully refundable security deposit when you enroll. Once you complete the program and successfully pass your official AWS Certified Solutions Architect - Associate exam, we refund your deposit in full. It's our way of partnering in your success—you bring the dedication, and we'll provide the expertise.
                </p>
              </div>
            </section>

            <section className="about-section">
              <h2 className="section-title">Real-World Learning Experience</h2>
              <div className="section-content">
                <p>
                  This isn't just a lecture series. You'll learn by doing, working on hands-on projects that simulate real-world challenges. With a mix of live, interactive sessions with our expert instructors and pre-recorded videos for flexible learning, you'll gain the confidence to not only pass the exam but to thrive in a professional cloud role.
                </p>
              </div>
            </section>

            <section className="about-section">
              <h2 className="section-title">Your Path to Success</h2>
              <div className="section-content">
                <p>
                  Our primary goal is to get you certified as an AWS Solutions Architect – Associate. From there, this program builds the perfect foundation for you to advance into specialized fields, like Machine Learning, if you choose.
                </p>
              </div>
            </section>

            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">🎓</div>
                <h3>Expert-Led Training</h3>
                <p>Learn from certified AWS professionals with real industry experience</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">💰</div>
                <h3>100% Refundable</h3>
                <p>Get your full deposit back upon successful certification completion</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🚀</div>
                <h3>Career Ready</h3>
                <p>Gain practical skills that employers are actively seeking</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">⏱️</div>
                <h3>8 Weeks</h3>
                <p>Intensive but manageable timeline to get you certified fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsAcademy;
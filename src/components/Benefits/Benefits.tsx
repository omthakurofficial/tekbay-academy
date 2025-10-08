import React from 'react';
import './Benefits.css';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: '📚',
      title: '45+ hours of guided learning',
    },
    {
      icon: '🎓',
      title: 'Earn globally recognized AWS certification',
    },
    {
      icon: '💼',
      title: 'Boost career & placement opportunities',
    },
    {
      icon: '⚙️',
      title: 'Work with real-world cloud projects',
    },
    {
      icon: '👨‍🏫',
      title: 'Learn from certified cloud experts',
    },
  ];

  const instructors = [
    {
      name: 'Rojan Sedhai',
      title: 'AWS Certified Solutions Architect - Professional',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80',
    },
    {
      name: 'Om Prakash Thakur',
      title: 'AWS Academy Certified Educator',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&q=80',
    },
  ];

  const stats = [
    {
      icon: '✅',
      text: '250+ Students Passed',
    },
    {
      icon: '💻',
      text: '40% Working In Leading Tech Companies',
    },
  ];

  return (
    <section className="benefits section" id="benefits">
      <div className="container">
        <h2 className="benefits-title">Benefits of Our Program</h2>
        
        <div className="benefits-layout">
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <p className="benefit-text">{benefit.title}</p>
              </div>
            ))}
          </div>

          <div className="instructors-section">
            <div className="instructors">
              {instructors.map((instructor, index) => (
                <div key={index} className="instructor-card">
                  <img src={instructor.image} alt={instructor.name} className="instructor-image" />
                  <h3 className="instructor-name">{instructor.name}</h3>
                  <p className="instructor-title">{instructor.title}</p>
                </div>
              ))}
            </div>

            <div className="stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-icon">{stat.icon}</span>
                  <span className="stat-text">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

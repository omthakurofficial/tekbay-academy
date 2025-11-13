import React, { useState } from 'react';
import './Benefits.css';
import { getAssetPath } from '../../utils/assetUtils';

interface BenefitsProps {
  onJoinNow?: () => void;
}

type ProgramType = 'saa' | 'ml';

const Benefits: React.FC<BenefitsProps> = ({ onJoinNow }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>('saa');

  const saaBenefits = [
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

  const mlBenefits = [
    {
      icon: '📚',
      title: '60+ Hours of Guided Learning',
    },
    {
      icon: '🎓',
      title: 'Earn globally recognized AWS certification',
    },
    {
      icon: '🤖',
      title: 'Real-World AI/ML Projects',
    },
    
    {
      icon: '💼 ',
      title: 'Boost career & placement opportunities',
    },
    {
      icon: '👨‍🏫',
      title: 'Learn from certified AI/ML experts',
    },
  ];

  const benefits = selectedProgram === 'saa' ? saaBenefits : mlBenefits;

  const stats = [
    {
      icon: '🎓',
      text: '350+ Students Passed',
    },
    {
      icon: '💻',
      text: '40% Working In Leading Tech Companies',
    },
  ];

  return (
    <section className="benefits section" id="benefits">
      <div className="container">
        <div className="program-tabs">
          <button 
            className={`program-tab ${selectedProgram === 'saa' ? 'active' : ''}`}
            onClick={() => setSelectedProgram('saa')}
          >
            AWS SAA-C03
          </button>
          <button 
            className={`program-tab ${selectedProgram === 'ml' ? 'active' : ''}`}
            onClick={() => setSelectedProgram('ml')}
          >
            AWS MLA-C01
          </button>
        </div>
        
        <h2 className="benefits-title">
          {selectedProgram === 'saa' 
            ? 'Benefits of AWS SAA-C03 Program' 
            : 'Benefits of MLA-C01 Program'}
        </h2>
        
        <div className="benefits-layout">
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <p className="benefit-text">{benefit.title}</p>
              </div>
            ))}
          </div>

          <div className="trainers-section">
            <div className="trainers-card">
              <div className="trainers-image-container">
                {selectedProgram === 'saa' ? (
                  <>
                    <div className="saa-trainers-photo">
                      <img 
                        src={getAssetPath('/images/trainners.png')}
                        alt="TekBay Trainers - Rojan Sedhai and Om Thakur"
                        className="saa-trainers-image"
                      />
                    </div>
                    
                    <div className="trainers-info">
                      <div className="trainer-details">
                        <div className="trainer-info-item">
                          <div className="trainer-name-with-link">
                            <span className="trainer-name">Rojan Sedhai</span>
                            <a 
                              href="https://www.linkedin.com/in/rojan-sedhai/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="linkedin-link"
                              aria-label="Rojan Sedhai LinkedIn Profile"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="trainer-info-item">
                          <div className="trainer-name-with-link">
                            <span className="trainer-name">Om Thakur</span>
                            <a 
                              href="https://www.linkedin.com/in/omthakurofficial/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="linkedin-link"
                              aria-label="Om Thakur LinkedIn Profile"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="combined-credentials">
                        <div className="credential-badge">
                          <span className="credential-text">AWS Certified Solution Architect - Professional</span>
                        </div>
                        <div className="credential-badge">
                          <span className="credential-text">AWS Academy Certified Educator</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="ml-trainer-photo">
                      <img 
                        src={getAssetPath('/images/rahul banjara.png')}
                        alt="TekBay ML Trainer - Rahul Dev Banjara"
                        className="ml-trainer-image"
                      />
                    </div>
                    
                    <div className="ml-trainer-info">
                      <div className="trainer-details">
                        <div className="trainer-info-item">
                          <div className="trainer-name-with-link">
                            <span className="trainer-name">Rahul Dev Banjara</span>
                            <a 
                              href="https://www.linkedin.com/in/devrahulbanjara/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="linkedin-link"
                              aria-label="Rahul Dev Banjara LinkedIn Profile"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="combined-credentials">
                        <div className="credential-badge">
                          <span className="credential-text">AWS Certified Machine Learning Engineer - Associate</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="achievement-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="achievement-item">
                    <span className="achievement-icon">{stat.icon}</span>
                    <span className="achievement-text">{stat.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
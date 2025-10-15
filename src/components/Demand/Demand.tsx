import React from 'react';
import './Demand.css';

interface DemandProps {
  onJoinNow?: () => void;
}

const Demand: React.FC<DemandProps> = ({ onJoinNow }) => {
  const stats = [
    {
      icon: '☁️',
      percentage: '54%',
      title: 'of IT leaders',
      description: 'are already moving workloads to the cloud',
    },
    {
      icon: '💼',
      percentage: '78%',
      title: 'of tech jobs',
      description: 'require cloud expertise.',
    },
    {
      icon: '💻',
      percentage: '65%',
      title: 'of software roles',
      description: 'demand AWS, Azure, or GCP skills.',
    },
  ];

  const benefits = [
    {
      icon: '🌍',
      title: '#1 platform:',
      description: 'Trusted by top enterprises worldwide.',
    },
    {
      icon: '📈',
      title: 'Industry Recognition:',
      description: 'AWS opens doors to career growth across the globe.',
    },
    {
      icon: '💰',
      title: 'Higher salaries:',
      description: 'AWS skills get you hired faster with higher salaries.',
    },
  ];

  const bridges = [
    {
      icon: '💵',
      title: 'Refundable Fee Program',
    },
    {
      icon: '⚙️',
      title: 'Hands on AWS Training',
    },
    {
      icon: '📋',
      title: 'Real-World Projects based learning',
    },
    {
      icon: '🤝',
      title: 'Networking & Career Opportunities',
    },
  ];

  return (
    <section className="demand section">
      <div className="container">
        <div className="demand-header">
          <h2 className="demand-headline">
            Cloud Will Power 90%<br />
            of Businesses<br />
            by 2027
          </h2>
          <p className="demand-question" onClick={onJoinNow}>ARE YOU READY?</p>
        </div>

        <div className="demand-content">
          <div className="demand-stats">
            <h3 className="stats-title">The Demand is Real</h3>
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <h4 className="stat-percentage">{stat.percentage} {stat.title}</h4>
                  <p className="stat-description">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="demand-benefits">
            <div className="benefits-box">
              <h3 className="benefits-title">
                Why Choose<br />
                AWS Certification?
              </h3>
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <div className="benefit-content">
                    <strong>{benefit.title}</strong> {benefit.description}
                  </div>
                </div>
              ))}
              <div className="entry-salary">
                Entry-level AWS pros earn <strong>₹18 LPA</strong> on average
              </div>
            </div>
          </div>
        </div>

        <div className="bridge-section">
          <h3 className="bridge-title">TekBay: YOUR BRIDGE TO THE CLOUD</h3>
          <div className="bridge-grid">
            {bridges.map((bridge, index) => (
              <div key={index} className="bridge-card">
                <div className="bridge-icon">{bridge.icon}</div>
                <p className="bridge-text">{bridge.title}</p>
              </div>
            ))}
          </div>

          <div className="final-offer">
            <div className="offer-badge">Limited Seats</div>
            <div className="offer-price">
              <span className="offer-original">Originally ₹24,999</span>
              <span className="offer-arrow">→</span>
              <span className="offer-current">Limited time offer ₹9,999</span>
            </div>
            <p className="offer-note">[Inclusive of AWS Exam Fee Worth USD 150]</p>
          </div>
        </div>

        <div className="cta-section">
          <p className="cta-text">For any further enquiries contact:</p>
          <a href="mailto:apprentice@tekbay.digital" className="cta-email">apprentice@tekbay.digital</a>
        </div>
      </div>
    </section>
  );
};

export default Demand;

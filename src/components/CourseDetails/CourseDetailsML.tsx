import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseDetails.css';
import { useCountry } from '../../contexts/CountryContext';

const CourseDetailsML: React.FC = () => {
  const navigate = useNavigate();
  const { selectedCountry } = useCountry();
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [showAllModules, setShowAllModules] = useState(false);

  const handleJoinNow = () => {
    navigate('/register');
  };

  const toggleModule = (moduleNumber: number) => {
    setExpandedModule(expandedModule === moduleNumber ? null : moduleNumber);
  };

  const toggleShowAllModules = () => {
    setShowAllModules(!showAllModules);
  };

  // Country-specific data
  const countryData = {
    india: {
      currency: '₹',
      originalPrice: '24,999',
      discountedPrice: '9,999',
      courseType: 'Online/Pre-recorded'
    },
    nepal: {
      currency: 'NPR',
      originalPrice: '25,000',
      discountedPrice: '12,000',
      courseType: 'Physical On-Premise'
    }
  };

  const currentCountry = countryData[selectedCountry];

  const courseModules = [
    {
      number: 1,
      title: "Introduction to Machine Learning on AWS",
      description: "Overview of machine learning concepts, AWS ML services ecosystem, and the exam structure.",
      topics: "ML fundamentals, AWS AI/ML services overview, exam domains, and ML lifecycle on AWS."
    },
    {
      number: 2,
      title: "Data Preparation and Feature Engineering",
      description: "Learn techniques for collecting, cleaning, and transforming data for machine learning workloads.",
      topics: "Data ingestion with S3, AWS Glue, data quality checks, feature engineering, and data labeling with SageMaker Ground Truth."
    },
    {
      number: 3,
      title: "Exploratory Data Analysis",
      description: "Understand how to analyze and visualize data to extract insights and prepare for model building.",
      topics: "Statistical analysis, data visualization with QuickSight, detecting data imbalances, and identifying patterns."
    },
    {
      number: 4,
      title: "Machine Learning Algorithms and Frameworks",
      description: "Deep dive into common ML algorithms and frameworks supported on AWS.",
      topics: "Supervised vs unsupervised learning, classification, regression, clustering, and deep learning frameworks (TensorFlow, PyTorch, MXNet)."
    },
    {
      number: 5,
      title: "Amazon SageMaker Fundamentals",
      description: "Introduction to Amazon SageMaker for building, training, and deploying machine learning models.",
      topics: "SageMaker notebook instances, built-in algorithms, training jobs, and hyperparameter tuning."
    },
    {
      number: 6,
      title: "Model Training and Optimization",
      description: "Learn best practices for training ML models efficiently and optimizing performance.",
      topics: "Distributed training, spot instances for cost optimization, automatic model tuning, and managing training jobs."
    },
    {
      number: 7,
      title: "Model Evaluation and Validation",
      description: "Techniques for evaluating model performance and preventing overfitting.",
      topics: "Metrics (accuracy, precision, recall, F1), cross-validation, confusion matrix, ROC curves, and model explainability."
    },
    {
      number: 8,
      title: "Model Deployment Strategies",
      description: "Deploy ML models to production using various AWS deployment options.",
      topics: "Real-time inference endpoints, batch transform, multi-model endpoints, and SageMaker hosting."
    },
    {
      number: 9,
      title: "MLOps and Model Monitoring",
      description: "Implement MLOps practices for continuous integration and monitoring of ML models.",
      topics: "SageMaker Pipelines, model monitoring, detecting data drift, A/B testing, and CI/CD for ML."
    },
    {
      number: 10,
      title: "Computer Vision with AWS",
      description: "Build computer vision applications using AWS AI services and custom models.",
      topics: "Amazon Rekognition, image classification, object detection, and custom vision models with SageMaker."
    },
    {
      number: 11,
      title: "Natural Language Processing (NLP)",
      description: "Implement NLP solutions for text analysis and language understanding.",
      topics: "Amazon Comprehend, sentiment analysis, entity recognition, text classification, and custom NLP models."
    },
    {
      number: 12,
      title: "Time Series Forecasting",
      description: "Build forecasting models for time-series data using AWS services.",
      topics: "Amazon Forecast, time series algorithms, data preparation for forecasting, and evaluating forecast accuracy."
    },
    {
      number: 13,
      title: "Recommendation Systems",
      description: "Design and implement personalized recommendation engines.",
      topics: "Amazon Personalize, collaborative filtering, content-based filtering, and hybrid recommendation approaches."
    },
    {
      number: 14,
      title: "ML Security and Compliance",
      description: "Implement security best practices and ensure compliance in ML workloads.",
      topics: "Data encryption, IAM policies for ML, VPC configurations, network isolation, and compliance frameworks."
    },
    {
      number: 15,
      title: "Cost Optimization for ML Workloads",
      description: "Strategies for optimizing costs while running ML workloads on AWS.",
      topics: "Spot instances, right-sizing compute resources, model optimization, and using AWS cost management tools."
    },
    {
      number: 16,
      title: "Advanced SageMaker Features",
      description: "Explore advanced capabilities of Amazon SageMaker for enterprise ML.",
      topics: "SageMaker Feature Store, Model Registry, Clarify for bias detection, and SageMaker Studio."
    },
    {
      number: 17,
      title: "Edge ML and IoT Integration",
      description: "Deploy ML models to edge devices and integrate with IoT solutions.",
      topics: "AWS IoT Greengrass, SageMaker Neo for model optimization, edge inference, and real-time processing."
    },
    {
      number: 18,
      title: "Exam Preparation and Best Practices",
      description: "Final review of key concepts and exam strategies for the AWS ML certification.",
      topics: "Exam tips, practice questions, domain review, and test-taking strategies."
    }
  ];

  const requirements = [
    "Basic understanding of machine learning concepts and terminology",
    "Familiarity with Python programming language",
    "Knowledge of basic statistics and linear algebra",
    "Understanding of AWS core services (EC2, S3, IAM)"
  ];

  const benefits = [
    { icon: "📚", title: "60+ Hours of Guided Learning" },
    { icon: "🤖", title: "Real-World AI/ML Projects" },
    { icon: "👨‍🏫", title: "Learn from certified AI/ML experts" },
    { icon: "🎓", title: "Earn globally recognized AWS certification" },
    { icon: "🤝", title: "Network with ML professionals & community" },
    { icon: "💼", title: "Boost career & placement opportunities" }
  ];

  const testimonials = [
    {
      name: "Bikash Pokhrel",
      role: "AWS Solutions Architect Associate",
      feedback: "I started with no background in cloud technologies, and the SAA Apprentice Program exceeded my expectations. The clear, practical lessons and real-world insights boosted my confidence and prepared me for professional exams."
    },
    {
      name: "Nishant Karn",
      role: "Cloud Engineer",
      feedback: "This program has been a game-changer for me, deepening my AWS knowledge and boosting my confidence in designing cloud solutions. It has opened new career opportunities and strengthened my skills."
    },
    {
      name: "Bibak Chand",
      role: "Cloud Computing Professional",
      feedback: "This program opened us to the world of cloud computing. How we can leverage different AWS services to solve problems effectively. This course laid the foundations for using AWS effectively."
    }
  ];

  const learningOutcomes = [
    "Build and train machine learning models using Amazon SageMaker",
    "Implement MLOps practices for production ML systems",
    "Deploy and monitor ML models at scale",
    "Apply AWS AI services for computer vision and NLP tasks",
    "Pass the AWS Certified Machine Learning Engineer Associate exam"
  ];

  return (
    <div className="course-details">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-hero-text">
              <h1>AWS Certified Machine Learning Engineer Associate</h1>
              <p className="course-subtitle">
                Master machine learning engineering on AWS and become a certified ML professional. Learn to build, 
                train, and deploy production-ready ML models using Amazon SageMaker and AWS AI services with our 
                100% refund guarantee program.
              </p>
              <button onClick={handleJoinNow} className="cta-button-large">
                Join Now →
              </button>
            </div>
            <div className="course-badge">
              <img 
                src="/images/ML associate.png" 
                alt="AWS Certified Machine Learning Engineer Associate Badge" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Banner */}
      <section className="course-overview-banner">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-item">
              <span className="overview-label">Duration</span>
              <span className="overview-value">10 Weeks</span>
            </div>
            <div className="overview-item">
              <span className="overview-label">Type</span>
              <span className="overview-value">{currentCountry.courseType}</span>
            </div>
            <div className="overview-item">
              <span className="overview-label">Certification</span>
              <span className="overview-value">AWS ML Engineer</span>
            </div>
            <div className="overview-item">
              <span className="overview-label">Resources</span>
              <span className="overview-value">Materials, Labs, Sessions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Requirements */}
      <section className="course-section">
        <div className="container">
          <h2 className="section-title">Course Requirements</h2>
          <div className="requirements-grid">
            {requirements.map((req, index) => (
              <div key={index} className="requirement-card">
                <span className="requirement-number">{index + 1}</span>
                <p>{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AWS ML */}
      <section className="course-section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose AWS Machine Learning Certification?</h2>
          <div className="why-choose-compact">
            <div className="why-compact-card">
              <div className="why-icon">🚀</div>
              <h3>High Demand</h3>
              <p>ML engineering is one of the fastest-growing tech careers</p>
            </div>
            <div className="why-compact-card">
              <div className="why-icon">☁️</div>
              <h3>Leading Platform</h3>
              <p>AWS provides comprehensive ML services</p>
            </div>
            <div className="why-compact-card">
              <div className="why-icon">💰</div>
              <h3>Premium Salaries</h3>
              <p>Earn up to {selectedCountry === 'india' ? '₹25 LPA and above' : 'NPR 15-20 LPA'}</p>
            </div>
            <div className="why-compact-card">
              <div className="why-icon">🔮</div>
              <h3>Future-Proof</h3>
              <p>AI/ML skills for tomorrow's tech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="course-section">
        <div className="container">
          <h2 className="section-title">Program Benefits</h2>
          <div className="benefits-compact-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-compact-card">
                <span className="benefit-compact-icon">{benefit.icon}</span>
                <p>{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="course-section bg-light">
        <div className="container">
          <div className="curriculum-header">
            <div>
              <h2 className="section-title">Course Curriculum</h2>
              <p className="section-description">
                18 comprehensive modules covering the entire ML lifecycle on AWS
              </p>
            </div>
            <button onClick={toggleShowAllModules} className="expand-all-btn">
              {showAllModules ? '− Show Less' : '+ View All Modules'}
            </button>
          </div>
          <div className="modules-accordion">
            {courseModules.slice(0, showAllModules ? courseModules.length : 4).map((module) => (
              <div key={module.number} className={`accordion-item ${expandedModule === module.number ? 'active' : ''}`}>
                <button 
                  className="accordion-header"
                  onClick={() => toggleModule(module.number)}
                >
                  <div className="accordion-title">
                    <span className="module-badge">Module {module.number}</span>
                    <h3>{module.title}</h3>
                  </div>
                  <span className="accordion-icon">{expandedModule === module.number ? '−' : '+'}</span>
                </button>
                {expandedModule === module.number && (
                  <div className="accordion-content">
                    <p className="module-description">{module.description}</p>
                    <p className="module-topics"><strong>Key Topics:</strong> {module.topics}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hands-On Labs */}
      <section className="course-section">
        <div className="container">
          <h2 className="section-title">Practical Application & Hands-On Labs</h2>
          <div className="labs-grid">
            <div className="lab-feature-card">
              <div className="lab-icon">🧪</div>
              <h3>Guided Labs</h3>
              <p>Step-by-step ML exercises with expert guidance</p>
            </div>
            <div className="lab-feature-card">
              <div className="lab-icon">🎯</div>
              <h3>Challenge Labs</h3>
              <p>Real-world ML scenarios to test your skills</p>
            </div>
            <div className="lab-feature-card">
              <div className="lab-icon">📝</div>
              <h3>Exam Practice</h3>
              <p>Mock tests and practice for certification</p>
            </div>
            <div className="lab-feature-card">
              <div className="lab-icon">✅</div>
              <h3>Mandatory Completion</h3>
              <p>Lab exercises required for ML services</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="course-section bg-light">
        <div className="container">
          <h2 className="section-title">What You'll Learn</h2>
          <div className="learning-outcomes">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="outcome-item">
                <span className="checkmark">✓</span>
                <p>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="course-section bg-light">
        <div className="container">
          <h2 className="section-title">Meet Your Trainer</h2>
          <div className="trainers-compact-grid">
            <div className="trainer-compact-card">
              <div className="trainer-icon">👨‍🏫</div>
              <h3>Rahul Dev Banjara</h3>
              <p className="trainer-experience">AI/ML Engineer and Trainer</p>
              <a 
                href="https://www.linkedin.com/in/devrahulbanjara/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="trainer-linkedin"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="course-section">
        <div className="container">
          <h2 className="section-title">Student Success Stories</h2>
          <div className="testimonials-compact-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-compact-card">
                <div className="testimonial-quote">“</div>
                <p className="testimonial-compact-text">{testimonial.feedback}</p>
                <div className="testimonial-compact-author">
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="course-section cta-compact-section">
        <div className="container">
          <div className="cta-compact-wrapper">
            <div className="cta-compact-content">
              <h2 className="cta-compact-title">Start Your ML Journey Today</h2>
              <div className="cta-price-row">
                <div className="cta-price-block">
                  <span className="cta-price-label">Program Fee</span>
                  <div className="cta-prices">
                    <span className="cta-original">{currentCountry.currency}{currentCountry.originalPrice}</span>
                    <span className="cta-current">{currentCountry.currency}{currentCountry.discountedPrice}</span>
                  </div>
                  <span className="cta-refund">100% Refundable*</span>
                </div>
                <div className="cta-bonus">
                  <span className="cta-gift">🎁</span>
                  <p>Win a MacBook!**</p>
                </div>
              </div>
              <button onClick={handleJoinNow} className="cta-join-button">
                Enroll Now →
              </button>
              <p className="cta-urgency">⚡ Limited seats available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="course-section terms-section">
        <div className="container">
          <h3>Terms and Conditions</h3>
          <ul className="terms-list">
            <li>* Fully Refundable when you pass the AWS Exam.</li>
            {selectedCountry === 'india' && (
              <>
                <li>** One time fixed transaction costs of Rs 500 for refund.</li>
                <li>*** When you pass the exam within 2 weeks from course end.</li>
                <li>*** Lucky draw among Top Scorers (Above 990) to win MacBook every 6 months.</li>
              </>
            )}
            {selectedCountry === 'nepal' && (
              <li>** Lucky draw among Top Scorers (Above 990) to win MacBook every 12 months.</li>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailsML;

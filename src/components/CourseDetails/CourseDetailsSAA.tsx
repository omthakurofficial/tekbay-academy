import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseDetails.css';
import { useCountry } from '../../contexts/CountryContext';

const CourseDetailsSAA: React.FC = () => {
  const navigate = useNavigate();
  const { selectedCountry } = useCountry();
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [showAllModules, setShowAllModules] = useState(false);

  const handleJoinNow = () => {
    navigate('/register');
  };

  // Country-specific data
  const countryData = {
    india: {
      currency: '₹',
      originalPrice: '24,999',
      discountedPrice: '9,999',
      courseType: 'In-Person Live Classes'
      // courseType: 'Online/Pre-recorded' // Old value - can be uncommented if needed
    },
    nepal: {
      currency: 'NPR',
      originalPrice: '25,000',
      discountedPrice: '12,000',
      courseType: 'Physical On-Premise'
    }
  };

  const currentCountry = countryData[selectedCountry];

  const toggleModule = (moduleNumber: number) => {
    setExpandedModule(expandedModule === moduleNumber ? null : moduleNumber);
  };

  const toggleShowAllModules = () => {
    setShowAllModules(!showAllModules);
  };

  const courseModules = [
    {
      number: 1,
      title: "Introduction to the AWS Solutions Architect Role",
      description: "Introduces the AWS Certified Solutions Architect - Associate exam, the AWS Well-Architected Framework, and the AWS shared responsibility model.",
      topics: "Exam format, scoring, the four main exam domains, and the 5 Pillars of the Well-Architected Framework."
    },
    {
      number: 2,
      title: "AWS Global Infrastructure & Core Concepts",
      description: "Covers the foundational components of the AWS global infrastructure that enable secure and resilient architectures.",
      topics: "AWS Regions and Availability Zones (AZs), edge locations, and AWS service quotas."
    },
    {
      number: 3,
      title: "Identity & Access Management (IAM)",
      description: "A deep dive into designing secure access to AWS resources using IAM, in line with the principle of least privilege.",
      topics: "IAM users, groups, roles, and policies, multi-factor authentication (MFA), and role-based access control (role switching, cross-account access)."
    },
    {
      number: 4,
      title: "Secure Networking with Amazon VPC",
      description: "Learn to design VPC architectures with robust security components to protect your workloads.",
      topics: "Designing VPCs with public and private subnets, security groups, network ACLs (NACLs), and route tables."
    },
    {
      number: 5,
      title: "Securing Applications & Networks",
      description: "Focuses on integrating AWS services to secure applications and external network connections.",
      topics: "Using AWS WAF, AWS Shield, and AWS Secrets Manager, and securing external connections with VPN and AWS Direct Connect."
    },
    {
      number: 6,
      title: "Data Security & Encryption",
      description: "Covers how to determine and implement appropriate data security controls, including encryption and key management.",
      topics: "Encrypting data at rest with AWS Key Management Service (AWS KMS), encrypting data in transit with AWS Certificate Manager (ACM), and managing encryption key rotation."
    },
    {
      number: 7,
      title: "Scalable Compute (EC2 & Auto Scaling)",
      description: "Learn to design high-performing and elastic compute solutions using Amazon EC2 and its scaling capabilities.",
      topics: "Selecting appropriate EC2 instance types and families, and implementing Amazon EC2 Auto Scaling (horizontal vs. vertical scaling)."
    },
    {
      number: 8,
      title: "Load Balancing & High Availability",
      description: "Understand how to use Elastic Load Balancing to distribute traffic and build highly available systems.",
      topics: "Load balancing concepts, Application Load Balancer (ALB), Network Load Balancer (NLB), and designing to mitigate single points of failure."
    },
    {
      number: 9,
      title: "Container Services (ECS, EKS, Fargate)",
      description: "Covers the orchestration of containers and how to migrate applications into containerized workloads.",
      topics: "Amazon Elastic Container Service (Amazon ECS), Amazon Elastic Kubernetes Service (Amazon EKS), and serverless containers with AWS Fargate."
    },
    {
      number: 10,
      title: "Serverless Architectures (Lambda & API Gateway)",
      description: "Focuses on designing serverless applications using AWS Lambda and Amazon API Gateway.",
      topics: "AWS Lambda patterns, API creation and management with Amazon API Gateway, and integrating serverless with other services."
    },
    {
      number: 11,
      title: "Loosely Coupled Architectures (SQS, SNS, EventBridge)",
      description: "Learn to design scalable and resilient microservice and event-driven architectures by decoupling components.",
      topics: "Queuing with Amazon SQS, publish/subscribe with Amazon SNS, and building event-driven architectures with Amazon EventBridge."
    },
    {
      number: 12,
      title: "Resilient & High-Performing Storage (S3, EFS, EBS)",
      description: "A comprehensive look at AWS storage services, focusing on selecting the right solution for performance, durability, and scalability.",
      topics: "Amazon S3 (object storage), Amazon EFS (file storage), Amazon EBS (block storage), and their associated characteristics."
    },
    {
      number: 13,
      title: "High-Availability & Disaster Recovery Strategies",
      description: "Learn to design architectures that can meet business requirements for recovery time (RTO) and recovery point (RPO).",
      topics: "Disaster recovery (DR) strategies (e.g., backup and restore, pilot light, warm standby), implementing data backups, and using Amazon Route 53 for failover."
    },
    {
      number: 14,
      title: "High-Performing Databases (RDS, Aurora, DynamoDB)",
      description: "Covers the selection and design of high-performing database solutions based on data access patterns and requirements.",
      topics: "Relational databases (Amazon RDS, Amazon Aurora) vs. non-relational databases (Amazon DynamoDB), and database capacity planning."
    },
    {
      number: 15,
      title: "Database Optimization & Caching",
      description: "Focuses on improving database performance by implementing read replicas and in-memory caching.",
      topics: "Configuring read replicas for RDS and Aurora, and integrating Amazon ElastiCache (Redis vs. Memcached)."
    },
    {
      number: 16,
      title: "High-Performing Networking & Content Delivery",
      description: "Learn to design advanced network topologies for global scale and high performance.",
      topics: "Edge networking with Amazon CloudFront (CDN), AWS Global Accelerator, and hybrid connectivity (VPC Peering, Transit Gateway)."
    },
    {
      number: 17,
      title: "Data Ingestion, Transformation & Analytics",
      description: "Covers the design of solutions for data ingestion, processing, and visualization.",
      topics: "Designing data streaming architectures (Amazon Kinesis), data transformation (AWS Glue), data analytics (Amazon Athena), and visualization (Amazon QuickSight)."
    },
    {
      number: 18,
      title: "Cost Management & Optimization",
      description: "Focuses on designing cost-optimized architectures using AWS cost management tools and selecting cost-effective services.",
      topics: "Using AWS Cost Explorer and AWS Budgets, AWS purchasing options (Spot, RI, Savings Plans), and cost allocation tags."
    }
  ];

  const requirements = [
    "Basic understanding of IT concepts and terminology",
    "Familiarity with networking fundamentals (IP addresses, subnets, routing)",
    "Basic knowledge of Linux/Windows operating systems",
    "Understanding of web technologies (HTTP/HTTPS, DNS)"
  ];

  const benefits = [
    { icon: "📚", title: "45+ hours of guided learning" },
    { icon: "⚙️", title: "Work with real-world cloud projects" },
    { icon: "👨‍🏫", title: "Learn from certified cloud experts" },
    { icon: "🎓", title: "Earn globally recognized AWS certification" },
    { icon: "🤝", title: "Connect with industry professionals & peers" },
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
    "Design secure, high-availability cloud architectures",
    "Deploy scalable applications using AWS services",
    "Manage data, security, and networking on AWS",
    "Implement cost-efficient cloud solutions",
    "Pass the AWS Solutions Architect Associate exam with confidence"
  ];

  return (
    <div className="course-details">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-hero-text">
              <h1>AWS Solutions Architect Associate</h1>
              <p className="course-subtitle">
                Become a certified AWS Solutions Architect and launch your cloud career with zero financial risk. 
                Our Cloud Apprenticeship Program is India's first AWS certification course that offers a 100% refund 
                when you pass your certification exam.
              </p>
              <button onClick={handleJoinNow} className="cta-button-large">
                Join Now →
              </button>
            </div>
            <div className="course-badge">
              <img 
                src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png" 
                alt="AWS Certified Solutions Architect Associate Badge" 
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
              <span className="overview-value">8 Weeks</span>
            </div>
            <div className="overview-item">
              <span className="overview-label">Type</span>
              <span className="overview-value">{currentCountry.courseType}</span>
            </div>
            <div className="overview-item">
              <span className="overview-label">Certification</span>
              <span className="overview-value">AWS SAA-C03</span>
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

      {/* Why Choose AWS SAA */}
      <section className="course-section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose AWS Solutions Architect Certification?</h2>
          <div className="why-choose-compact">
            <div className="why-compact-card">
              <div className="why-icon">🏆</div>
              <h3>#1 Cloud Platform</h3>
              <p>AWS powers more global businesses than any other cloud provider</p>
            </div>
            <div className="why-compact-card">
              <div className="why-icon">🌍</div>
              <h3>Global Recognition</h3>
              <p>AWS certification is respected and recognized worldwide</p>
            </div>
            <div className="why-compact-card">
              <div className="why-icon">💼</div>
              <h3>Career Advantage</h3>
              <p>Earn up to {selectedCountry === 'india' ? '₹18 LPA' : 'NPR 10-15 LPA'} on average</p>
            </div>
            <div className="why-compact-card">
              <div className="why-icon">☁️</div>
              <h3>Cloud Adoption</h3>
              <p>54% of companies moving to cloud</p>
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
                18 comprehensive modules covering foundational to advanced AWS concepts
              </p>
            </div>
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
            
            {/* Action buttons at the bottom */}
            <div className="curriculum-actions">
              <button onClick={toggleShowAllModules} className="expand-modules-btn">
                {showAllModules ? '− Show Less' : '+ View All Modules'}
              </button>
              {showAllModules && (
                <button onClick={handleJoinNow} className="curriculum-join-btn">
                  JOIN NOW
                </button>
              )}
            </div>
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
              <p>Step-by-step hands-on exercises with expert guidance</p>
            </div>
            <div className="lab-feature-card">
              <div className="lab-icon">🎯</div>
              <h3>Challenge Labs</h3>
              <p>Real-world scenarios to test your skills</p>
            </div>
            <div className="lab-feature-card">
              <div className="lab-icon">📝</div>
              <h3>Exam Practice</h3>
              <p>Mock tests and practice sessions for certification</p>
            </div>
            <div className="lab-feature-card">
              <div className="lab-icon">✅</div>
              <h3>Mandatory Completion</h3>
              <p>Lab exercises required for major AWS services</p>
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
          <h2 className="section-title">Meet Your Trainers</h2>
          <div className="trainers-compact-grid">
            <div className="trainer-compact-card">
              <div className="trainer-icon">👨‍🏫</div>
              <h3>Om Thakur</h3>
              <p className="trainer-experience">Cloud Trainer | 5+ Years</p>
              <a 
                href="https://www.linkedin.com/in/omthakurofficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="trainer-linkedin"
              >
                LinkedIn →
              </a>
            </div>
            <div className="trainer-compact-card">
              <div className="trainer-icon">👨‍🏫</div>
              <h3>Rojan Sedhai</h3>
              <p className="trainer-experience">Cloud Trainer | 5+ Years</p>
              <a 
                href="https://www.linkedin.com/in/rojan-sedhai/" 
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
                <div className="testimonial-quote">"</div>
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
              <h2 className="cta-compact-title">Start Your Cloud Journey Today</h2>
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

export default CourseDetailsSAA;

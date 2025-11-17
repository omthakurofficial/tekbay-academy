import React, { useState } from 'react';
import './FAQs.css';
import { useCountry } from '../../contexts/CountryContext';

interface FAQItem {
  question: string;
  answer: string;
}

type ProgramType = 'saa' | 'ml';

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>('saa');
  const { getCurrentPricing, getCurrentCountryName } = useCountry();
  const pricing = getCurrentPricing();
  const currentCountry = getCurrentCountryName();

  const saaFaqData: FAQItem[] = [
    {
      question: "What is the AWS SAA-C03 certification?",
      answer: "The AWS Certified Solutions Architect - Associate (SAA-C03) is a globally recognized certification that validates your ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS."
    },
    {
      question: "Who should take this program?",
      answer: "This program is ideal for fresh graduates, IT students, early professionals, system administrators, and developers looking to transition into cloud computing and establish a career in AWS architecture."
    },
    {
      question: "What is the program fee and what does it include?",
      answer: `The program fee is ${pricing.symbol}${pricing.offerPrice} (original price: ${pricing.symbol}${pricing.originalPrice}). This includes 45+ hours of guided learning, hands-on labs, real-world projects, mock exams, study materials, and the AWS exam fee worth $150. The fee is 100% refundable when you pass the certification exam.`
    },
    {
      question: "How long is the program?",
      answer: "The program runs for 8 weeks with structured modules covering all exam domains. You'll have access to pre-recorded lectures, live doubt-clearing sessions, hands-on labs, and unlimited practice tests."
    },
    {
      question: "What topics are covered in the SAA-C03 course?",
      answer: "The course covers 20+ comprehensive modules including AWS Global Infrastructure, IAM, VPC & Networking, EC2 & Auto Scaling, Load Balancing, Storage Solutions (S3, EBS, EFS), Databases (RDS, DynamoDB), Serverless Computing (Lambda), Container Services (ECS, EKS), CloudFormation, Monitoring, Security, Cost Optimization, and more."
    },
    {
      question: "Do I need prior AWS experience?",
      answer: "No prior AWS experience is required. However, basic understanding of IT concepts like networking, databases, and operating systems is helpful. Our course starts from fundamentals and progressively builds your skills."
    },
    {
      question: "How do I access the training materials?",
      answer: "All training sessions, labs, and resources are hosted on our Learning Management System (LMS). You'll receive login credentials after enrollment and have 24/7 access to the platform throughout the program and beyond."
    },
    {
      question: "What is the refund policy?",
      answer: currentCountry === 'Nepal' 
        ? "The program fee is 100% refundable when you pass the AWS exam. Simply submit your exam score report, and we'll process your refund. There's also a lucky draw among top scorers (above 990) to win a MacBook every 12 months."
        : "The program fee is 100% refundable when you pass the AWS exam within 2 weeks from course end. A one-time fixed transaction cost of Rs 500 applies for refund processing. There's also a lucky draw among top scorers (above 990) to win a MacBook every 6 months."
    },
    {
      question: "What support do I get during the program?",
      answer: "You'll have access to certified AWS instructors for doubt resolution, dedicated support channels, peer learning groups, weekly live sessions, and personalized guidance throughout your learning journey."
    },
    {
      question: "What happens after I complete the program?",
      answer: "After completing the program, you'll be ready to take the AWS SAA-C03 exam. We provide exam scheduling guidance and continue to support you. Upon passing, you'll have career support including resume building, interview preparation, and networking opportunities with our alumni community."
    },
    {
      question: "Can I get placement assistance?",
      answer: "Yes! We provide career guidance, resume building support, mock interviews, and networking opportunities. Over 40% of our students are working in leading tech companies, and we help connect talented graduates with our industry partners."
    },
    {
      question: "What if I fail the exam?",
      answer: "If you don't pass on your first attempt, you can retake the exam. We provide additional support, study materials, and guidance to help you succeed. The exam retake fee is not included and must be paid separately to AWS."
    },
    {
      question: "Is this course online or offline?",
      answer: currentCountry === 'Nepal'
        ? "For Nepal, we offer physical on-premise training at our training center, providing hands-on experience in a collaborative learning environment."
        : "For India, the program is delivered online with pre-recorded lectures and live interactive sessions, giving you the flexibility to learn at your own pace while staying connected with instructors and peers."
    },
    {
      question: "What are the prerequisites for AWS SAA-C03 exam?",
      answer: "AWS recommends having at least one year of hands-on experience with AWS, but our comprehensive program is designed to prepare you even without prior AWS experience. Our hands-on labs and projects provide the practical exposure needed."
    },
    {
      question: "How do I enroll?",
      answer: "Click the 'Join Now' button, fill out the registration form with your details, complete the payment, and you'll receive immediate access to the program materials and LMS platform."
    }
  ];

  const mlFaqData: FAQItem[] = [
    {
      question: "What is the AWS MLA-C01 certification?",
      answer: "The AWS Certified Machine Learning Engineer - Associate (MLA-C01) is a globally recognized certification that validates your ability to design, build, deploy, and maintain machine learning solutions on AWS using industry best practices."
    },
    {
      question: "Who should take this program?",
      answer: "This program is perfect for data scientists, ML engineers, software developers, data analysts, and IT professionals who want to specialize in machine learning and AI on the AWS platform. It's also suitable for graduates looking to enter the AI/ML field."
    },
    {
      question: "What is the program fee and what does it include?",
      answer: `The program fee is ${pricing.symbol}${pricing.offerPrice} (original price: ${pricing.symbol}${pricing.originalPrice}). This includes 60+ hours of comprehensive AI/ML training, hands-on projects with real datasets, SageMaker labs, mock exams, study materials, and the AWS exam fee worth $150. The fee is 100% refundable when you pass the certification exam.`
    },
    {
      question: "How long is the program?",
      answer: "The program runs for 10 weeks with in-depth coverage of machine learning concepts, AWS AI/ML services, and practical implementations. You'll work on real-world projects and gain hands-on experience with Amazon SageMaker."
    },
    {
      question: "What topics are covered in the MLA-C01 course?",
      answer: "The course covers 20+ modules including ML Fundamentals, Data Preparation & Feature Engineering, Exploratory Data Analysis, ML Algorithms, Amazon SageMaker, Model Training & Optimization, Model Evaluation, Deployment Strategies, MLOps, Computer Vision, Natural Language Processing, Time Series Analysis, Reinforcement Learning, AutoML, Model Monitoring, and Cost Optimization."
    },
    {
      question: "Do I need prior machine learning experience?",
      answer: "Basic programming knowledge (Python preferred) and understanding of mathematics (statistics, linear algebra) is recommended. Prior ML experience is helpful but not mandatory. Our course covers ML fundamentals and progressively advances to AWS-specific implementations."
    },
    {
      question: "What programming languages are used?",
      answer: "The primary language used is Python, which is the industry standard for machine learning. You'll use popular libraries like NumPy, Pandas, Scikit-learn, TensorFlow, and PyTorch along with AWS SDK (Boto3) for AWS integrations."
    },
    {
      question: "How do I access the training materials?",
      answer: "All lectures, hands-on labs, Jupyter notebooks, datasets, and resources are available on our Learning Management System (LMS). You'll get 24/7 access with lifetime validity, allowing you to revisit content anytime."
    },
    {
      question: "What is the refund policy for the ML program?",
      answer: currentCountry === 'Nepal'
        ? "The program fee is 100% refundable when you pass the AWS MLA-C01 exam. Submit your exam score report for refund processing. Top scorers (above 990) are also eligible for a lucky draw to win a MacBook every 12 months."
        : "The program fee is 100% refundable when you pass the AWS exam within 2 weeks from course end. A one-time transaction cost of Rs 500 applies for refund processing. Top scorers (above 990) can participate in a lucky draw to win a MacBook every 6 months."
    },
    {
      question: "What makes this ML program unique?",
      answer: "Our program combines theoretical knowledge with extensive hands-on practice on AWS. You'll work on real-world datasets, build end-to-end ML pipelines, deploy models to production, and learn from AWS certified AI/ML experts. Plus, it's the only program offering 100% refund on certification."
    },
    {
      question: "What AWS services will I learn?",
      answer: "You'll master Amazon SageMaker (the core service), along with AWS Glue for data preparation, Amazon Rekognition for computer vision, Amazon Comprehend for NLP, Amazon Forecast for time series, S3 for storage, Lambda for serverless ML, and other AI/ML services in the AWS ecosystem."
    },
    {
      question: "Will I work on real projects?",
      answer: "Yes! You'll complete multiple hands-on projects including image classification, sentiment analysis, recommendation systems, fraud detection, demand forecasting, and more. Each project uses real-world datasets and follows industry best practices."
    },
    {
      question: "What support do I get during the program?",
      answer: "You'll have access to certified AI/ML instructors, dedicated Slack channels for instant doubt resolution, weekly live Q&A sessions, one-on-one mentoring for project guidance, and a supportive peer community."
    },
    {
      question: "Can I get placement assistance?",
      answer: "Absolutely! We provide career support including portfolio building, resume optimization for ML roles, mock technical interviews, and connections to our network of hiring partners. Our alumni work at top tech companies and startups."
    },
    {
      question: "Is this course online or offline?",
      answer: currentCountry === 'Nepal'
        ? "For Nepal, we offer physical on-premise training with dedicated lab facilities equipped with GPU instances for ML training, providing an immersive learning experience."
        : "For India, the program is delivered online with self-paced video lectures and live mentoring sessions, offering flexibility while ensuring you get hands-on practice with AWS ML services."
    },
    {
      question: "What are the prerequisites for the AWS MLA-C01 exam?",
      answer: "AWS recommends 1-2 years of experience in developing, training, and deploying ML models. Our program bridges this gap with comprehensive training and hands-on projects that provide equivalent practical experience."
    },
    {
      question: "How do I enroll?",
      answer: "Click the 'Join Now' button, complete the registration form, make the payment, and you'll receive immediate access to the program. You can start learning right away!"
    }
  ];

  const faqData = selectedProgram === 'saa' ? saaFaqData : mlFaqData;

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs">
      <div className="container">
        <div className="faqs-header">
          <h2>Frequently Asked Questions</h2>
          <p className="faqs-subtitle">Everything you need to know about our programs</p>
        </div>

        <div className="program-tabs-faq">
          <button 
            className={`program-tab-faq ${selectedProgram === 'saa' ? 'active' : ''}`}
            onClick={() => {
              setSelectedProgram('saa');
              setActiveIndex(null);
            }}
          >
            AWS SAA-C03
          </button>
          <button 
            className={`program-tab-faq ${selectedProgram === 'ml' ? 'active' : ''}`}
            onClick={() => {
              setSelectedProgram('ml');
              setActiveIndex(null);
            }}
          >
            AWS MLA-C01
          </button>
        </div>

        <div className="faqs-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

import React, { useState } from 'react';
import './FAQs.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Who can join the program?",
      answer: "Fresh graduates, IT students, or early professionals looking to enter cloud computing."
    },
    {
      question: "What is the program fee?",
      answer: "₹9,997 (includes AWS exam fee worth $150). Fully refundable if you pass the exam."
    },
    {
      question: "How long is the program?",
      answer: "8 weeks of guided training, hands-on labs, and mock exams."
    },
    {
      question: "Do I get a certificate?",
      answer: "Yes, you will earn an AWS Solutions Architect Associate certification, recognized worldwide."
    },
    {
      question: "How do I access the training?",
      answer: "All sessions and labs are hosted on our Learning Management System (LMS)."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs">
      <div className="container">
        <div className="faqs-header">
          <h2>FAQs</h2>
          <p className="faqs-subtitle">Learn more about cloud apprenticeships</p>
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

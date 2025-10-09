import React, { useEffect } from 'react';
import './TermsAndConditions.css';

const TermsAndConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-and-conditions">
      <div className="container">
        <div className="terms-header">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last Updated: October 9, 2025</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <p>
              Welcome to TekBay Digital Solutions. These Terms and Conditions govern your use of our Cloud Apprenticeship Program and related services. By accessing or using our platform, you agree to be bound by these terms.
            </p>
          </section>

          <section className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By enrolling in the TekBay Cloud Apprenticeship Program, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Program Enrollment</h2>
            <h3>2.1 Eligibility</h3>
            <p>
              Our Cloud Apprenticeship Program is designed for fresh graduates, IT students, and early professionals looking to enter the cloud computing field. Participants must be at least 18 years of age or have parental/guardian consent.
            </p>
            
            <h3>2.2 Registration</h3>
            <p>
              To enroll in the program, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section className="terms-section">
            <h2>3. Program Fee and Refund Policy</h2>
            <h3>3.1 Fee Structure</h3>
            <p>
              The program fee is ₹9,997, which includes the AWS Solutions Architect Associate exam fee (worth approximately $150 USD). Payment must be completed at the time of enrollment.
            </p>
            
            <h3>3.2 Refund Policy</h3>
            <p>
              The program fee is fully refundable if you successfully pass the AWS Solutions Architect Associate certification exam. To claim your refund:
            </p>
            <ul>
              <li>You must complete the 8-week training program</li>
              <li>You must pass the AWS certification exam on your first attempt</li>
              <li>You must submit your official AWS certification within 30 days of passing the exam</li>
              <li>Refunds will be processed within 14 business days of verification</li>
            </ul>
            
            <h3>3.3 Non-Refundable Circumstances</h3>
            <p>
              The program fee is non-refundable if you:
            </p>
            <ul>
              <li>Fail to complete the 8-week training program</li>
              <li>Do not pass the AWS certification exam on your first attempt</li>
              <li>Withdraw from the program before completion</li>
              <li>Violate any terms of this agreement</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>4. Program Duration and Content</h2>
            <h3>4.1 Duration</h3>
            <p>
              The Cloud Apprenticeship Program is an 8-week intensive training program. The program includes guided training sessions, hands-on labs, mock exams, and access to our Learning Management System (LMS).
            </p>
            
            <h3>4.2 Content and Materials</h3>
            <p>
              All training materials, including videos, documents, labs, and assessments, are proprietary to TekBay Digital Solutions and are provided for your personal, non-commercial use only. You may not:
            </p>
            <ul>
              <li>Share, distribute, or reproduce any course materials</li>
              <li>Record or screenshot live training sessions without permission</li>
              <li>Use program content for commercial purposes</li>
              <li>Share your LMS access credentials with others</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>5. Learning Management System (LMS) Access</h2>
            <p>
              Upon enrollment, you will receive access to our LMS platform at <a href="https://learn.tekbay.digital" target="_blank" rel="noopener noreferrer">learn.tekbay.digital</a>. Your LMS access includes:
            </p>
            <ul>
              <li>Access to all course materials for the duration of the program</li>
              <li>Continued access for 30 days after program completion</li>
              <li>Participation in live training sessions and labs</li>
              <li>Access to mock exams and practice assessments</li>
            </ul>
            <p>
              TekBay reserves the right to suspend or terminate LMS access if you violate these terms.
            </p>
          </section>

          <section className="terms-section">
            <h2>6. Student Responsibilities</h2>
            <p>
              As a participant in the Cloud Apprenticeship Program, you agree to:
            </p>
            <ul>
              <li>Attend all scheduled training sessions and complete assigned labs</li>
              <li>Maintain a professional and respectful attitude toward instructors and fellow students</li>
              <li>Complete all coursework and assessments in a timely manner</li>
              <li>Use program resources responsibly and ethically</li>
              <li>Comply with AWS's exam policies and code of conduct</li>
              <li>Not engage in any form of cheating or academic dishonesty</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>7. AWS Certification Exam</h2>
            <h3>7.1 Exam Registration</h3>
            <p>
              TekBay will provide guidance on registering for the AWS Solutions Architect Associate exam. The exam fee is included in your program fee. You are responsible for scheduling and taking the exam.
            </p>
            
            <h3>7.2 Exam Policies</h3>
            <p>
              The AWS certification exam is governed by AWS's exam policies and terms. You must comply with all AWS requirements and policies. TekBay is not responsible for exam outcomes or any issues arising from the AWS certification process.
            </p>
            
            <h3>7.3 Exam Attempts</h3>
            <p>
              The program fee covers one exam attempt. If you fail the exam on your first attempt, you will be responsible for the cost of any subsequent exam attempts and will not be eligible for the refund policy.
            </p>
          </section>

          <section className="terms-section">
            <h2>8. Intellectual Property</h2>
            <p>
              All content, materials, trademarks, logos, and intellectual property associated with the TekBay Cloud Apprenticeship Program are owned by TekBay Digital Solutions or its licensors. You may not use, reproduce, or distribute any TekBay intellectual property without prior written consent.
            </p>
          </section>

          <section className="terms-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              TekBay Digital Solutions provides the Cloud Apprenticeship Program on an "as is" basis. While we strive to provide high-quality training, we do not guarantee:
            </p>
            <ul>
              <li>That you will pass the AWS certification exam</li>
              <li>Employment or job placement upon program completion</li>
              <li>Specific career outcomes or salary increases</li>
              <li>Uninterrupted or error-free access to the LMS</li>
            </ul>
            <p>
              To the maximum extent permitted by law, TekBay shall not be liable for any indirect, incidental, special, or consequential damages arising from your participation in the program.
            </p>
          </section>

          <section className="terms-section">
            <h2>10. Termination</h2>
            <h3>10.1 By Student</h3>
            <p>
              You may withdraw from the program at any time. However, withdrawal will result in forfeiture of the program fee and loss of access to all program materials and the LMS.
            </p>
            
            <h3>10.2 By TekBay</h3>
            <p>
              TekBay reserves the right to terminate your enrollment if you:
            </p>
            <ul>
              <li>Violate these Terms and Conditions</li>
              <li>Engage in disruptive or inappropriate behavior</li>
              <li>Share program materials or LMS access without authorization</li>
              <li>Fail to make required payments</li>
            </ul>
            <p>
              Termination by TekBay for violation of terms will result in forfeiture of the program fee.
            </p>
          </section>

          <section className="terms-section">
            <h2>11. Privacy and Data Protection</h2>
            <p>
              Your use of the TekBay platform is subject to our Privacy Policy. We collect and process personal information in accordance with applicable data protection laws, including GDPR, COPPA, and FERPA. Please review our <a href="/privacy-policy">Privacy Policy</a> for detailed information.
            </p>
          </section>

          <section className="terms-section">
            <h2>12. Modifications to Terms</h2>
            <p>
              TekBay reserves the right to modify these Terms and Conditions at any time. We will notify enrolled students of any material changes via email or through the LMS. Your continued participation in the program after notification constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="terms-section">
            <h2>13. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your participation in the program shall be subject to the exclusive jurisdiction of the courts in [Your City/State].
            </p>
          </section>

          <section className="terms-section">
            <h2>14. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:apprentice@tekbay.digital">apprentice@tekbay.digital</a><br/>
              <strong>Website:</strong> <a href="https://tekbay.digital" target="_blank" rel="noopener noreferrer">https://tekbay.digital</a>
            </p>
          </section>

          <section className="terms-section">
            <h2>15. Severability</h2>
            <p>
              If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="terms-section">
            <h2>16. Entire Agreement</h2>
            <p>
              These Terms and Conditions, together with our Privacy Policy, constitute the entire agreement between you and TekBay Digital Solutions regarding your participation in the Cloud Apprenticeship Program.
            </p>
          </section>

          <section className="terms-section">
            <p style={{ marginTop: '40px', fontStyle: 'italic' }}>
              By enrolling in the TekBay Cloud Apprenticeship Program, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

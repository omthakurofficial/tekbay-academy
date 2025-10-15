import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy">
      <div className="container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: 15 October 2025</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Introduction</h2>
            <p>
              Privacy is a fundamental right. At Tekbay Digital ("Company"/"Us"/"We"/"Our"), privacy and data security are treated with the utmost seriousness. This Privacy Policy governs your access to and use of every content, functionality, and service offered on or through the Tekbay Academy website (www.tekbay.academy) and affiliated applications. By accessing, browsing, or using the Tekbay Academy platform ("Platform"), you agree to comply with and be bound by the terms outlined in this policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Collection and Use</h2>
            
            <h3>Types of Data Collected</h3>
            <p>
              <strong>Personal Information:</strong> Includes your name, contact details (such as email and phone number), account credentials, educational details, and other identifiers.
            </p>
            <p>
              <strong>Student/Educational Records:</strong> Includes records such as grades, attendance, session logs, submissions, and assessment data.
            </p>
            <p>
              <strong>Technical and Usage Information:</strong> Includes device identifiers, browser details, IP addresses, cookies, browser history, and usage analytics.
            </p>
            <p>
              <strong>Third-Party Data:</strong> We may receive information from schools, educators, parents, or authorized third parties as required for educational services.
            </p>

            <h3>Purposes of Data Use</h3>
            <ul>
              <li>Provide, personalize, and improve learning services.</li>
              <li>Maintain transaction records and enable payments.</li>
              <li>Communicate with users, send updates, and maintain support.</li>
              <li>Enhance Platform functionality, security, and fraud prevention.</li>
              <li>Comply with legal obligations, educational regulations, and contractual requirements.</li>
            </ul>

            <h3>Legal Grounds for Processing Data</h3>
            <p>
              <strong>Consent:</strong> For collection of personal or sensitive data, including parental/verifiable consent where required.
            </p>
            <p>
              <strong>Contractual Necessity:</strong> Where data is needed for fulfilling service obligations.
            </p>
            <p>
              <strong>Legitimate Interests:</strong> Enhancing the learning experience, troubleshooting, and service improvement.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Child & Student Data Protection</h2>
            <p>
              <strong>India:</strong> For users under 18, verifiable parental/legal guardian consent and age verification are mandatory for account creation and data processing.
            </p>
            <p>
              <strong>United States:</strong> Tekbay Academy complies with the Children's Online Privacy Protection Act (COPPA) and Family Educational Rights and Privacy Act (FERPA). COPPA protections apply for users under 13; FERPA covers student educational records for users of all ages under school contracts.
            </p>
            <p>
              <strong>Parental Rights:</strong> Parents and eligible students have the right to review, request correction, or deletion of any student records maintained by us. Requests can be made via email to <a href="mailto:apprenticeship@tekbay.digital">apprenticeship@tekbay.digital</a>.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Disclosure and Sharing</h2>
            <p>We may share your information:</p>
            <ul>
              <li>With authorized school personnel, educators, or institutions for legitimate educational purposes.</li>
              <li>With third-party service providers for technical, analytical, or operational assistance, always bound by confidentiality contracts.</li>
              <li>With government authorities where required by law or regulation.</li>
            </ul>
            <p>
              We do not sell or exploit student or personal data for advertising or unrelated commercial purposes.
            </p>
            <p>
              Cookies and analytics are used to enhance user experience. Users may opt-out or control cookie settings in their browsers.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Security</h2>
            <p>
              Tekbay Academy implements robust, industry-standard security measures including encryption, access controls, audit logs, regular vulnerability assessments, and staff training.
            </p>
            <p>
              Security incidents will be notified to affected users and authorities as per law.
            </p>
          </section>

          <section className="privacy-section">
            <h2>International Data Transfers</h2>
            <p>
              Data may be processed or stored in countries outside your jurisdiction. Where this occurs, Tekbay Digital implements lawful transfer mechanisms and contractual safeguards to ensure continued protection.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Retention and Deletion</h2>
            <p>
              Data is retained as required for the purposes described unless a longer retention period is mandated by law.
            </p>
            <p>
              Session records and unshared class materials may be scheduled for deletion in line with internal retention policies or upon account/account feature downgrade.
            </p>
            <p>
              Requests for data deletion should be directed to <a href="mailto:apprenticeship@tekbay.digital">apprenticeship@tekbay.digital</a>.
            </p>
          </section>

          <section className="privacy-section">
            <h2>User Rights</h2>
            <p>
              <strong>Right to Access:</strong> Request details of the personal data held about you.
            </p>
            <p>
              <strong>Right to Rectification:</strong> Request correction of inaccurate or outdated records.
            </p>
            <p>
              <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time without impacting the legality of prior processing.
            </p>
            <p>
              <strong>Right to Deletion:</strong> Request deletion of your data, subject to school, institution, or legal requirements.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Third-Party Websites and Services</h2>
            <p>
              Tekbay Academy may contain links to external sites not controlled by Tekbay Digital. Users are advised to review the privacy policies of third-party websites before use.
            </p>
            <p>
              Tekbay Digital is not responsible for the privacy practices or data use by third-party websites.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Changes to This Policy</h2>
            <p>
              The company reserves the right to update this Privacy Policy. Material changes will be communicated via a notice on the Platform or via email. Continued use after modifications constitutes acceptance of the revised policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Contact and Grievance Officer</h2>
            <p>
              If you have any questions, concerns, or requests regarding this policy or your data, please write to our Grievance Officer:
            </p>
            <p>
              Email: <a href="mailto:apprenticeship@tekbay.digital">apprenticeship@tekbay.digital</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

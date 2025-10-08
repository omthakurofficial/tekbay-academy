import React from 'react';
import './ProgramOverview.css';

const ProgramOverview: React.FC = () => {
  return (
    <section className="program-overview section" id="program">
      <div className="container">
        <div className="program-header">
          <h2 className="section-title">TekBay's Cloud Apprenticeship Program</h2>
          <p className="section-description">
            Fresh graduate or early professional looking for a career in tech? Join our cloud apprenticeship program and gain hands-on, real world cloud skills and earn your AWS certification to unlock exciting career opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;

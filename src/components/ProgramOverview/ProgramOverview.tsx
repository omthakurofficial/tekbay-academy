import React from 'react';
import './ProgramOverview.css';

const ProgramOverview: React.FC = () => {
  return (
    <section className="program-overview section" id="program">
      <div className="container">
        <div className="program-card">
          <h1 className="program-title">TekBay's Cloud Apprenticeship Program</h1>
          <p className="program-description">
            Fresh graduate or early professional looking for a career in tech? Join our cloud apprenticeship program and gain hands-on, real world cloud skills and earn your AWS certification to unlock exciting career opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;

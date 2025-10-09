import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProgramOverview from './components/ProgramOverview/ProgramOverview';
import Benefits from './components/Benefits/Benefits';
import Pricing from './components/Pricing/Pricing';
import Demand from './components/Demand/Demand';
import FAQs from './components/FAQs/FAQs';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';

// Home page component
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ProgramOverview />
      <Benefits />
      <Pricing />
      <Demand />
      <FAQs />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router basename="/tekbay-academy">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

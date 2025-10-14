import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import PromoBanner from './components/PromoBanner/PromoBanner';
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
import AboutUsAcademy from './components/AboutUsAcademy/AboutUsAcademy';
import RegistrationModal from './components/RegistrationModal/RegistrationModal';

// Home page component
const HomePage: React.FC<{ onJoinNow: () => void }> = ({ onJoinNow }) => {
  return (
    <>
      <Hero onJoinNow={onJoinNow} />
      <ProgramOverview />
      <Benefits />
      <Pricing />
      <Demand />
      <FAQs />
    </>
  );
};

const App: React.FC = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const handleJoinNow = () => {
    setIsRegistrationModalOpen(true);
  };

  return (
    <Router basename="/tekbay-academy">
      <div className="App">
        <PromoBanner onJoinNow={handleJoinNow} />
        <Header onJoinNow={handleJoinNow} />
        <Routes>
          <Route path="/" element={<HomePage onJoinNow={handleJoinNow} />} />
          <Route path="/about-academy" element={<AboutUsAcademy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer onJoinNow={handleJoinNow} />
        <RegistrationModal 
          isOpen={isRegistrationModalOpen} 
          onClose={() => setIsRegistrationModalOpen(false)} 
        />
      </div>
    </Router>
  );
};

export default App;

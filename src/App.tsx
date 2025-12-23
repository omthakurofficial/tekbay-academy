import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './styles/global.css';
import ScrollToTop from './components/ScrollToTop';
import PromoBanner from './components/PromoBanner/PromoBanner';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProgramOverview from './components/ProgramOverview/ProgramOverview';
import Testimonials from './components/Testimonials/Testimonials';
import Benefits from './components/Benefits/Benefits';
import Pricing from './components/Pricing/Pricing';
import Demand from './components/Demand/Demand';
import FAQs from './components/FAQs/FAQs';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import AboutUsAcademy from './components/AboutUsAcademy/AboutUsAcademy';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import CourseDetailsSAA from './components/CourseDetails/CourseDetailsSAA';
import CourseDetailsML from './components/CourseDetails/CourseDetailsML';
import Webinar from './components/Webinar/Webinar';
import { CountryProvider } from './contexts/CountryContext';
import { ProgramProvider } from './contexts/ProgramContext';

// Home page component - using navigate hook
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleJoinNow = () => {
    navigate('/register');
  };

  return (
    <>
      <Hero onJoinNow={handleJoinNow} />
      <ProgramOverview />
      <Benefits onJoinNow={handleJoinNow} />
      <Testimonials />
      <Pricing onJoinNow={handleJoinNow} />
      <Demand onJoinNow={handleJoinNow} />
      <FAQs />
    </>
  );
};

const App: React.FC = () => {
  return (
    <CountryProvider>
      <ProgramProvider>
        <Router basename="/">
          <AppContent />
        </Router>
      </ProgramProvider>
    </CountryProvider>
  );
};

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleJoinNow = () => {
    navigate('/register');
  };

  // Don't show the main footer on the webinar page since it has its own
  const shouldShowFooter = location.pathname !== '/webinar';
  
  // Don't show the promo banner on the webinar page
  const shouldShowPromoBanner = location.pathname !== '/webinar';

  return (
    <div className="App">
      <ScrollToTop />
      {shouldShowPromoBanner && <PromoBanner onJoinNow={handleJoinNow} />}
      <Header onJoinNow={handleJoinNow} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/about-academy" element={<AboutUsAcademy onJoinNow={handleJoinNow} />} />
        <Route path="/courses/aws-solution-architect-associate" element={<CourseDetailsSAA />} />
        <Route path="/courses/aws-certified-machine-learning-engineer-associate" element={<CourseDetailsML />} />
        <Route path="/webinar" element={<Webinar onJoinNow={handleJoinNow} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      {shouldShowFooter && <Footer onJoinNow={handleJoinNow} />}
    </div>
  );
};

export default App;

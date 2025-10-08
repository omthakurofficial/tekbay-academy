import React from 'react';
import './styles/global.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProgramOverview from './components/ProgramOverview/ProgramOverview';
import Benefits from './components/Benefits/Benefits';
import Pricing from './components/Pricing/Pricing';
import Demand from './components/Demand/Demand';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProgramOverview />
      <Benefits />
      <Pricing />
      <Demand />
      <Footer />
    </div>
  );
};

export default App;

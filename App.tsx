import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Comparison from './components/Comparison';
import Methodology from './components/Methodology';
import Audience from './components/Audience';
import FormSection from './components/FormSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-fuchsia-500 selection:text-white overflow-x-hidden">
      <Hero />
      <About />
      <Comparison />
      <Methodology />
      <Audience />
      <FormSection />
      <Footer />
    </div>
  );
};

export default App;
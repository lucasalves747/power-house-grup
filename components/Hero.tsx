import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('cadastro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-purple-900/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
      
      {/* Navbar Placeholder */}
      <div className="absolute top-6 left-0 right-0 px-6 max-w-7xl mx-auto flex justify-between items-center z-20">
        <img 
          src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/693af904517c3a084b5d8cf1.png" 
          alt="Power House Logo" 
          className="h-20 md:h-20 "
        />
        <button 
          onClick={scrollToForm}
          className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-bold text-sm hover:opacity-90 transition "
        >
          QUERO MINHA VAGA →
        </button>
      </div>

      <div className="text-center max-w-5xl mx-auto z-10 flex flex-col items-center gap-8">
        
        {/* Main Logo in Hero */}
        <div className="mb-4 animate-fade-in-up">
           <img 
            src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/693af904517c3a084b5d8cf1.png" 
            alt="Power House Logo" 
            className="h-[200px] sm:h-[300px]   mx-auto drop-shadow-[0_0_35px_rgba(168,85,247,0.5)] "
          />
          
        </div>

        {/* Date Pill */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-md mb-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-gray-300 font-medium text-sm md:text-base">12 a 14 de Dezembro 2025</span>
        </div>

        {/* Headlines */}
        <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
          Acompanhe a construção de legados <br className="hidden md:block" />
          <span className="gradient-text">em apenas 3 dias</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Testemunhe imersões profundas para a criação de métodos, livros e produtos ao lado dos mentores especialistas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 w-full md:w-auto">
          <Button onClick={scrollToForm} fullWidth>
            QUERO ASSISTIR AGORA!
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} fullWidth>
            Saber Mais
          </Button>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050508] to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
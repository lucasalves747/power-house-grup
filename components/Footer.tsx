import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020205] border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <img 
  src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/6938351b10381826274a643d.png"
  alt="Power House"
  className="h-8 grayscale opacity-50 hover:opacity-100 transition-all rotate-90"
/>
        <div className="text-gray-600 text-sm text-center md:text-right">
          <p>© 2025 Power House Miami. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const Audience: React.FC = () => {
  const audienceList = [
    "É Criador", "É Coach ou Consultor", "Está Mudando Carreiras",
    "É Especialista", "É Empreendedor", "Tem Conhecimento sem Estrutura",
    "É Educador", "Está Se Posicionando", "Tem Conteúdo mas Procrastina"
  ];

  const outcomes = [
    "Insights de Método", "Inspiração para o Livro", "Palestra Modelada",
    "Funil Entendido", "Conteúdos para Replicar", "Audiência Crescendo"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#050508] to-[#1a0b2e]">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-12">
            A Transmissão Power House é <span className="text-purple-500">para você se...</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {audienceList.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default text-sm md:text-base font-semibold">
                {item.toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0f0c15] border border-purple-500/20 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <h3 className="font-display text-2xl md:text-4xl font-bold mb-8 relative z-10">
            Imagine sua vida depois de assistir...
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-gray-300 font-medium">{outcome}</span>
              </div>
            ))}
          </div>

          <p className="mt-12 text-gray-400 max-w-2xl mx-auto relative z-10 text-lg">
            Se você sente que está pronto, mas falta o empurrão certo… <strong className="text-white">Este é o empurrão.</strong>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Audience;
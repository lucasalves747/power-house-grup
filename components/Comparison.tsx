import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">A Diferença é Brutal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A Power House não é um evento. É a chave de acesso para a sala de criação dos produtores de elite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Without PH */}
          <div className="bg-[#0f0c15] border border-red-900/30 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-800 to-red-600"></div>
            <h3 className="text-2xl font-bold text-red-500 mb-8 flex items-center gap-2">
              <XCircle /> Sem o POWER HOUSE
            </h3>
            <ul className="space-y-6">
              {[
                "Cursos que ensinam, mas não constroem.",
                "Eventos que inspiram, mas não entregam.",
                "Estruturas lentas, confusas e solitárias.",
                "Produtos que nunca saem do papel.",
                "Voltar pra casa sem clareza."
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <XCircle className="w-5 h-5 text-red-500/50 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With PH */}
          <div className="bg-[#12101c] border border-purple-500/50 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_-15px_rgba(168,85,247,0.2)]">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 flex items-center gap-2">
              <CheckCircle className="text-purple-400" /> Dentro do Power House
            </h3>
            <ul className="space-y-6">
              {[
                "Ver eles entrarem em uma casa por 3 dias...",
                "E ver eles saírem com tudo pronto para vender.",
                "Nada de anotar ideias. Execução pura.",
                "Criar NA HORA - Lançar NA HORA - Aparecer NA HORA.",
                "Tudo pronto. Nada fica pra depois."
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-white font-medium">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
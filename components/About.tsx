import React from 'react';
import { Eye, Lock, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative bg-[#050508]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-pink-500 uppercase">A Realidade do Mercado</h2>
            <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Cansado de ouvir falar do <span className="text-purple-400">"caminho"</span> do sucesso?
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              E se você pudesse olhar por trás da cortina e ver a criação do zero, de produtos, métodos, livros, palestras, funis de venda... ao vivo em apenas 3 dias?
            </p>
            <p className="text-white text-lg font-medium border-l-4 border-pink-500 pl-4">
              Não é teoria. Não é inspiração. É sua chance de ESPIONAR os bastidores de um mercado que mais cria milionários.
            </p>
            <p className="text-gray-400 text-lg">
              Enquanto todos vendem a teoria, nós vamos te dar o <strong className="text-white">ACESSO TOTAL</strong> ao processo que ninguém mostra. É a sua chance de ver a EXECUÇÃO, PRONTA, FEITA E FUNCIONANDO 100%.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-[#0a0a0f] border border-white/10 rounded-2xl p-8 space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <Eye className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Spy The Process</h4>
                  <p className="text-gray-400">20 futuros produtores em uma casa. Mentores construindo ao vivo. Você vê tudo.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400">
                  <Lock className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Sem Segredos</h4>
                  <p className="text-gray-400">Nós revelamos o que o mercado esconde. Cada erro, cada correção, cada estratégia.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Acesso Ilimitado</h4>
                  <p className="text-gray-400">Você não apenas assiste; você COPIA O PASSO A PASSO que está sendo criado na sua frente.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Lightbulb, Layout, Bot, Award, Rocket, Radio } from 'lucide-react';

const Methodology: React.FC = () => {
  const methods = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Idea Mining",
      desc: "Extração profunda das histórias que te transformam em autoridade.",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Framework Engineering",
      desc: "Organizar seus insights em método prático e replicável.",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Production Tracks",
      desc: "Criar livro, palestra, workshop e produto com IA como co-piloto.",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Authority Narrative",
      desc: "Definir seu ângulo, identidade e posicionamento único.",
      color: "text-pink-400",
      bg: "bg-pink-400/10"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch Engine",
      desc: "Construir página, promessa, copy e funil em tempo real.",
      color: "text-green-400",
      bg: "bg-green-400/10"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Livestream Strategy",
      desc: "Transformar toda essa construção em audiência e conteúdo.",
      color: "text-red-400",
      bg: "bg-red-400/10"
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#050508] relative overflow-hidden">
       {/* Background Grid Decoration */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold">Como isso é possível em 3 dias?</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Revelamos um modelo de aceleração impossível em eventos tradicionais. Tudo é pensado para impedir bloqueios e permitir criação com liberdade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((item, idx) => (
            <div key={idx} className="bg-[#0e0e12] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all hover:-translate-y-1 group">
              <div className={`inline-flex p-4 rounded-xl mb-6 ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
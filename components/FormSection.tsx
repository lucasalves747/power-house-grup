import React, { useEffect } from 'react';

const FormSection: React.FC = () => {
  useEffect(() => {
    // Load the external script for the iframe resizing/logic
    const script = document.createElement('script');
    script.src = "https://link.salee.ai/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="cadastro" className="py-24 px-4 bg-[#050508] relative">
      <div className="max-w-4xl mx-auto bg-[#0a0a0f] border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>

        <div className="relative z-10 text-center mb-10">
          <span className="inline-block py-1 px-3 rounded bg-pink-500/10 text-pink-400 text-xs font-bold tracking-widest uppercase mb-4">
            Vagas Limitadas
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Garanta seu Acesso Gratuito
          </h2>
          <p className="text-gray-400">
            O evento é 100% online e ao vivo. Quem não age rápido fica de fora.
          </p>
        </div>

        <div className="relative z-10 w-full min-h-[500px]">
          <iframe
            src="https://link.salee.ai/widget/form/mgyNcpOSWfSARnYRntFg"
            style={{ width: '100%', height: '100%', minHeight: '500px', border: 'none', borderRadius: '20px' }}
            id="inline-mgyNcpOSWfSARnYRntFg"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="power house contact"
            data-height="492"
            data-layout-iframe-id="inline-mgyNcpOSWfSARnYRntFg"
            data-form-id="mgyNcpOSWfSARnYRntFg"
            title="power house contact"
          >
          </iframe>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4 relative z-10">
          Serão os 3 dias mais bem investidos do seu tempo até hoje.
        </p>
      </div>
    </section>
  );
};

export default FormSection;
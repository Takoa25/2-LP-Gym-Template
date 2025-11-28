import React from 'react';
import { MessageCircle } from 'lucide-react';
import { content } from '../Content';

import { WhatsAppIcon } from './WhatsAppIcon';

const FinalCTA: React.FC = () => {
  if (!content.finalCta.enabled) return null;

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={content.images.ctaBackground} className="w-full h-full object-cover opacity-20" alt="CTA Background" />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-black/90 mb-6 leading-tight">
          {content.finalCta.headline} <br />
          <span className="text-white" style={{ WebkitTextStroke: '1px black' }}>{content.finalCta.headlineHighlight}</span>
        </h2>

        <p className="text-black/90 text-xl max-w-2xl mx-auto mb-10 font-medium">
          {content.finalCta.subtitle}
        </p>

        <a
          href={`https://wa.me/${content.infos.whatsapp}?text=${encodeURIComponent(content.finalCta.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
        >
          <WhatsAppIcon className="w-6 h-6 text-green-500" />
          {content.finalCta.buttonText}
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
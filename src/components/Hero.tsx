import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { content } from '../Content';

const Hero: React.FC = () => {
  if (!content.hero.enabled) return null;

  const whatsappLink = `https://wa.me/${content.infos.whatsapp}?text=${encodeURIComponent(content.hero.ctaSecondary.whatsappMessage)}`;

  return (
    <section
      id="hero"
      className={`
        relative 
        flex 
        overflow-hidden 
        
        /* min-heights por breakpoint (mantém a hero ocupando viewport) */
        min-h-[80vh] md:min-h-[85vh] lg:min-h-[85vh]

        /* vertical alignment:
        - mobile: items-start (top) + top padding para empurrar o bloco um pouco para baixo
        - tablet+: items-center para centralizar verticalmente
        */
        items-start md:items-center

        /* spacing controlado aqui:
        - pt-24 (mobile) empurra o bloco para baixo no celular
        - md:pt-0 remove esse push e deixa o items-center centralizar no tablet
        - pb mantém espaço para os botões no mobile
        */
        pt-24 md:pt-0 pb-12
      `}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={content.images.heroMobile} />
          <img
            src={content.images.heroDesktop}
            alt="Gym Background"
            className="w-full h-full object-cover object-center"
          />
        </picture>
        {/* 
           AJUSTE DE OPACIDADE DO BACKGROUND (MOBILE):
           Mude 'bg-black/50' para aumentar ou diminuir a escuridão no celular.
           Ex: bg-black/40 (mais claro), bg-black/80 (mais escuro).
        */}
        <div className="absolute inset-0 bg-black/50 md:hidden"></div>

        {/* 
           AJUSTE DE OPACIDADE DO BACKGROUND (DESKTOP):
           Este é um gradiente que vai do preto (esquerda) para transparente (direita).
           
           - 'from-black/90': Cor escura na esquerda (atrás do texto). Aumente/diminua o 90 para ajustar.
           - 'via-black/50': Cor no meio da transição.
           - 'to-transparent': Mantém o lado direito da imagem original visível.
        */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-xl lg:max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest">{content.hero.badge}</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            {content.hero.headline.part1} {content.hero.headline.part2} <span className="text-primary block mt-2">{content.hero.headline.highlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
            {content.hero.subheadline.text} <span className="text-white font-semibold">{content.hero.subheadline.highlight}</span>
          </p>

          {/* MOBILE BUTTONS */}
          <div className="lg:hidden flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-800 to-green-600 hover:from-green-900 hover:to-green-700 text-white h-10 text-lg px-6 rounded-full font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 w-full max-w-xs whitespace-nowrap flex items-center justify-center cursor-pointer"
            >
              {content.hero.ctaSecondary.text}
            </a>

            <a
              href={content.hero.ctaPrimary.link}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 h-10 text-lg px-6 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 w-full max-w-xs whitespace-nowrap flex items-center justify-center cursor-pointer"
            >
              {content.hero.ctaPrimary.text}
            </a>
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex lg:flex-row gap-4 mt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-800 to-green-600 hover:from-green-900 hover:to-green-700 text-white text-xl px-10 py-4 rounded-full font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 group whitespace-nowrap flex items-center justify-center cursor-pointer"
            >
              {content.hero.ctaSecondary.text}
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
            </a>

            <a
              href={content.hero.ctaPrimary.link}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 text-xl px-10 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap flex items-center justify-center cursor-pointer"
            >
              {content.hero.ctaPrimary.text}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
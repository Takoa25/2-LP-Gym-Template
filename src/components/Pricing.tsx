import React from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { content } from '../Content';

const Pricing: React.FC = () => {
  if (!content.pricing.enabled) return null;

  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-4">
            {content.pricing.headline} <span className="text-primary">{content.pricing.headlineHighlight}</span>
          </h2>
          <p className="text-zinc-400">{content.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {content.pricing.plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-3xl transition-transform duration-300 ${plan.highlighted ? 'bg-zinc-900 border-2 border-primary scale-105 shadow-2xl shadow-primary/20 z-10' : 'bg-zinc-900/50 border border-white/5 hover:border-white/10'}`}
            >
              {plan.highlighted && plan.badgeText && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-contrast text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg">
                  {plan.badgeText}
                </div>
              )}
              {plan.highlighted && plan.discountText && (
                <div className="absolute top-4 right-4 text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded font-bold">
                  {plan.discountText}
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-sm text-zinc-400 mb-1">R$</span>
                <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
                <span className="text-sm text-zinc-400 mb-1">{plan.period}</span>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`rounded-full p-1 ${plan.highlighted ? 'bg-primary' : 'bg-zinc-800'}`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-primary-contrast' : 'text-white'}`} />
                    </div>
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${content.infos.whatsapp}?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${plan.highlighted ? 'bg-primary hover:bg-primary-dark text-primary-contrast shadow-lg shadow-primary/25' : 'bg-white text-zinc-900 hover:bg-zinc-200'}`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
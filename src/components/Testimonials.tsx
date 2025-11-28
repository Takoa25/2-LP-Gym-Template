import React from 'react';
import { Star, Quote } from 'lucide-react';
import { content } from '../Content';

const Testimonials: React.FC = () => {
  if (!content.testimonials.enabled) return null;

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-zinc-500 font-medium uppercase tracking-widest text-sm">{content.testimonials.label}</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mt-2">
            {content.testimonials.headline} <span className="text-primary">{content.testimonials.headlineHighlight}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.items.map((t) => (
            <div key={t.id} className="bg-zinc-950 p-8 rounded-2xl relative border border-white/5 hover:border-primary/20 transition-colors">
              <Quote className="absolute top-8 right-8 text-zinc-800 w-10 h-10 fill-current" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? 'text-yellow-500 fill-yellow-500' : 'text-zinc-700'}`}
                  />
                ))}
              </div>

              <p className="text-zinc-300 mb-8 leading-relaxed italic">"{t.content}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-zinc-800 select-none pointer-events-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
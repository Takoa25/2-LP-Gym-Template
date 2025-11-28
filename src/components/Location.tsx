import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { content } from '../Content';

const Location: React.FC = () => {
  if (!content.location.enabled) return null;

  return (
    <section id="location" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Info Side */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-6 text-center lg:text-left">{content.location.headline}</h2>
              <div className="flex gap-4 items-start mb-4">
                <MapPin className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-zinc-300">
                  {content.infos.address}
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                <div className="text-zinc-300">
                  {content.location.hours.map((item, i) => (
                    <p key={i}><span className="text-white font-bold">{item.label}:</span> {item.time}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h3 className="font-bold text-white mb-4 text-center lg:text-left">Facilidades</h3>
              <div className="grid grid-cols-2 gap-4">
                {content.location.facilities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-zinc-400">
                    <item.icon className="w-4 h-4 text-green-500" /> {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-2/3 h-[400px] bg-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-white/5">
            <iframe
              src={content.infos.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }} //se quiser adicionar filtro preto no mapa, usa - filter: 'grayscale(1) invert(0.9) contrast(1.2)'
              allowFullScreen={true}
              loading="lazy"
              title="Gym Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
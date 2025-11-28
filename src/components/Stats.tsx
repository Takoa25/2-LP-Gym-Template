import React from 'react';
import { Star } from 'lucide-react';
import { content } from '../Content';

const Stats: React.FC = () => {
  if (!content.stats.enabled) return null;

  return (
    <section className="bg-zinc-900 border-y border-white/5 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {content.stats.items.map((item, index) => (
             <div key={index} className="flex flex-col items-center justify-center text-center p-4">
                {/* Logic to render generic icons or stars */}
                {item.icon === 'Star' ? (
                   <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                ) : (
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                )}
                
                <p className="text-2xl font-display font-bold text-white">{item.value}</p>
                <p className="text-sm text-zinc-500">{item.label}</p>
             </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Stats;
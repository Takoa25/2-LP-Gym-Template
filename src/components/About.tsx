import React, { useRef, useState, useEffect } from 'react';
import { content } from '../Content';
import { Instagram } from 'lucide-react';

const About: React.FC = () => {
  if (!content.team.enabled) return null;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // IntersectionObserver for more accurate tracking
    const observerOptions = {
      root: container,
      threshold: 0.5, // Trigger when 50% of item is visible
      rootMargin: '0px'
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all team cards
    const cards = container.querySelectorAll('[data-team-card]');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-4">
            {content.team.headline} <span className="text-primary">{content.team.headlineHighlight}</span>
          </h2>
        </div>

        {/* Desktop Grid / Mobile Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
        >
          {content.team.members.map((member, index) => (
            <div
              key={index}
              data-team-card
              data-index={index}
              className="min-w-[280px] md:min-w-0 snap-center relative group h-[400px] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-display font-bold text-white uppercase italic mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">{member.role}</p>

                {/* Social Icon (Visible on hover desktop, always visible mobile) */}
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300"
                >
                  <Instagram className="w-4 h-4" /> Seguir
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="flex justify-center gap-2 md:hidden mt-2">
          {content.team.members.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeIndex === i ? 'bg-primary' : 'bg-zinc-800'
                }`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
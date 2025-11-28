import React, { useRef, useState, useEffect } from 'react';
import { content } from '../Content';

const Services: React.FC = () => {
  if (!content.services.enabled) return null;

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

    // Observe all service cards
    const cards = container.querySelectorAll('[data-service-card]');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-12 text-center">
          {content.services.headline} <span className="text-primary">{content.services.headlineHighlight}</span>
        </h2>

        {/* Desktop Grid / Mobile Scroll Snap */}
        <div
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
        >
          {content.services.items.map((service, index) => (
            <div
              key={service.id}
              data-service-card
              data-index={index}
              className="min-w-[280px] md:min-w-0 snap-center relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-2xl font-bold text-white mb-2 uppercase italic">{service.title}</h3>
                <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="flex justify-center gap-2 md:hidden mt-4">
          {content.services.items.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-primary' : 'bg-zinc-700'
                }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
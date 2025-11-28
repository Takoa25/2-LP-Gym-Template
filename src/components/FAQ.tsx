import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { content } from '../Content';

const FAQ: React.FC = () => {
  if (!content.faq.enabled) return null;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-zinc-900 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase text-center mb-12">
          {content.faq.headline} <span className="text-primary">{content.faq.headlineHighlight}</span>
        </h2>

        <div className="space-y-4">
          {content.faq.items.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-white/5 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-primary' : 'text-zinc-200 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
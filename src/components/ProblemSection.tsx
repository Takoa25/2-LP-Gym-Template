import React from 'react';
import { content } from '../Content';

const ProblemSection: React.FC = () => {
    if (!content.problem.enabled) return null;

    return (
        <section className="py-20 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-4">
                        {content.problem.headline} <span className="text-primary">{content.problem.headlineHighlight}</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        {content.problem.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {content.problem.cards.map((card, index) => (
                        <div key={index} className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <card.icon className="w-7 h-7 text-primary group-hover:animate-pulse" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                            <p className="text-zinc-400">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;

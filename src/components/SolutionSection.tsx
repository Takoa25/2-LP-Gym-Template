import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { content } from '../Content';

const SolutionSection: React.FC = () => {
    if (!content.solution.enabled) return null;

    return (
        <section className="py-20 bg-zinc-900">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <img
                            src={content.images.solution}
                            alt="Solution Image"
                            className="rounded-2xl shadow-2xl shadow-black/50 grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-square"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">{content.solution.label}</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            {content.solution.headline} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">{content.solution.headlineHighlight}</span>
                        </h2>

                        <div className="space-y-6">
                            {content.solution.features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{feature.title}</h4>
                                        <p className="text-zinc-400">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;

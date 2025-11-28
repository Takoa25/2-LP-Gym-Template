import React, { useEffect } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Location from './components/Location';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { content } from './Content';

import SEO from './components/SEO';
import ScrollReveal from './components/ScrollReveal';

const MainPage: React.FC = () => {
    useEffect(() => {
        // Set CSS Variables for Colors
        const root = document.documentElement;
        root.style.setProperty('--color-primary', content.colors.primary);
        root.style.setProperty('--color-primary-dark', content.colors.primaryDark);
        root.style.setProperty('--color-primary-highlight', content.colors.primaryHighlight);
        root.style.setProperty('--color-text-on-primary', content.colors.textOnPrimary);
        root.style.setProperty('--color-secondary', content.colors.secondary);
        root.style.setProperty('--color-background', content.colors.background);

    }, []);

    return (
        <div className="min-h-screen bg-zinc-950 flex flex-col font-sans">
            <SEO />
            <div className="sticky top-0 z-50 w-full bg-zinc-950">
                <Banner />
                <Navbar />
            </div>
            <main>
                <Hero />
                <ScrollReveal><Stats /></ScrollReveal>
                <ScrollReveal><ProblemSection /></ScrollReveal>
                <ScrollReveal><SolutionSection /></ScrollReveal>
                <ScrollReveal><Services /></ScrollReveal>
                <ScrollReveal><Testimonials /></ScrollReveal>
                <ScrollReveal><About /></ScrollReveal>
                <ScrollReveal><Location /></ScrollReveal>
                <ScrollReveal><Pricing /></ScrollReveal>
                <ScrollReveal><FAQ /></ScrollReveal>
                <ScrollReveal><FinalCTA /></ScrollReveal>
            </main>
            <Footer />
            <CookieBanner />
        </div>
    );
};

export default MainPage;

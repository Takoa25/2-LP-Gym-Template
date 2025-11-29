import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { content } from '../Content';

import { WhatsAppIcon } from './WhatsAppIcon';

const Navbar: React.FC = () => {
  if (!content.navbar.enabled) return null;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent py-5 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary rounded-lg group-hover:bg-black transition-colors">
            {/* If logo image exists, use it, else icon */}
            <Dumbbell className="text-primary-contrast w-6 h-6 group-hover:text-primary transition-colors" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            {content.navbar.logoText}<span className="text-primary">{content.navbar.logoTextHighlight}</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {content.navbar.menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-lg font-medium text-zinc-300 hover:text-white transition-colors group py-1"
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${index === 0 ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-white text-zinc-950 px-5 py-2 rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors"
          >
            {content.navbar.ctaButtonText}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Abrir menu de navegação"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação mobile"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer Content */}
        <div className={`relative w-[80%] max-w-sm bg-zinc-900 h-full shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between mb-10">
            <span className="font-display font-bold text-xl tracking-tighter text-white">
              MENU
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Fechar menu de navegação"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {content.navbar.menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-zinc-300 hover:text-primary transition-colors border-b border-white/5 pb-4"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${content.infos.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-4 rounded-xl font-bold text-center uppercase tracking-wider shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Entrar em contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
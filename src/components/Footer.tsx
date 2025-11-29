import React from 'react';
import { Dumbbell, Instagram, Facebook, Youtube, Phone, MessageCircle } from 'lucide-react';
import { content } from '../Content';

import { WhatsAppIcon } from './WhatsAppIcon';

const Footer: React.FC = () => {
  if (!content.footer.enabled) return null;

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <Dumbbell className="text-primary-contrast w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-white">
                {content.navbar.logoText}<span className="text-primary">{content.navbar.logoTextHighlight}</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              {content.footer.description}
            </p>
            <div className="flex gap-4">
              <a href={content.footer.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-primary-contrast transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={content.footer.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-primary-contrast transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={content.footer.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-primary hover:text-primary-contrast transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              {content.footer.quickLinks.map((link) => (
                <li key={link.label}><a href={link.href} className="hover:text-primary transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Políticas</h4>
            <div className="space-y-4 text-zinc-400 text-sm">
              {content.footer.policies.map((link, index) => {
                const isPrivacyLink = link.label.toLowerCase().includes('privacidade');
                const isTermsLink = link.label.toLowerCase().includes('termos');

                if (isPrivacyLink) {
                  return (
                    <a
                      key={index}
                      href="/privacidade"
                      className="block text-zinc-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  );
                }

                if (isTermsLink) {
                  return (
                    <a
                      key={index}
                      href="/termos"
                      className="block text-zinc-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-zinc-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Fale Conosco</h4>
            <div className="space-y-4">
              <a href={`https://wa.me/${content.infos.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group">
                <WhatsAppIcon className="w-5 h-5 text-green-500" />
                <span>{content.infos.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-5 h-5 text-primary" />
                <span>{content.infos.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} {content.infos.name}. {content.footer.copyright}</p>
          <p>
            {content.footer.developedBy}
            <a
              href={content.footer.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-primary transition-colors"
            >
              {content.footer.developerName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
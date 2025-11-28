import React, { useState, useEffect } from 'react';
import { content } from '../Content';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent && content.cookieBanner.enabled) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-[100] bg-zinc-900 border-t border-white/10 shadow-2xl"
            role="region"
            aria-label="Banner de consentimento de cookies"
            aria-live="polite"
        >
            <div className="container mx-auto px-4 md:px-8 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-300 text-sm md:text-base text-center md:text-left">
                        {content.cookieBanner.message}
                    </p>
                    <div className="flex gap-3 flex-shrink-0">
                        <a
                            href="/privacidade"
                            className="px-6 py-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-zinc-900 rounded-full font-semibold transition-all duration-300 whitespace-nowrap"
                            aria-label="Ler política de privacidade"
                        >
                            {content.cookieBanner.privacyButtonText}
                        </a>
                        <button
                            onClick={handleAccept}
                            className="px-6 py-2 bg-primary hover:bg-primary-dark text-primary-contrast rounded-full font-semibold transition-all duration-300 whitespace-nowrap"
                            aria-label="Aceitar cookies e fechar banner"
                        >
                            {content.cookieBanner.acceptButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;

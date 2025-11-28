import React, { useState, useEffect } from 'react';
import MainPage from './MainPage.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const Router: React.FC = () => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        // Listen for popstate (browser back/forward)
        window.addEventListener('popstate', handleLocationChange);

        // Intercept link clicks (but not anchor links)
        const handleClick = (e: Event) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');

            // Don't intercept anchor links (#hero, #about, etc.)
            if (link && link.href.startsWith(window.location.origin) && !link.href.includes('#')) {
                e.preventDefault();
                const url = new URL(link.href);
                window.history.pushState({}, '', url.pathname);
                setCurrentPath(url.pathname);
                window.scrollTo(0, 0);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    if (currentPath === '/privacidade') {
        return <PrivacyPolicy />;
    }

    if (currentPath === '/termos') {
        return <TermsOfService />;
    }

    return <MainPage />;
};

export default Router;

import React, { useEffect } from 'react';
import { content } from '../Content';

interface SEOProps {
    title?: string;
    description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
    const { seo } = content;
    const pageTitle = title ? `${title} | ${content.infos.name}` : seo.title;
    const pageDescription = description || seo.description;

    const fullUrl = `${seo.domain}${seo.path}`;
    const imageUrl = seo.og.image.startsWith('http') ? seo.og.image : `${seo.domain}${seo.og.image}`;

    useEffect(() => {
        // Atualiza título
        document.title = pageTitle;

        // Função auxiliar para atualizar ou criar meta tags
        const updateMeta = (nameOrProperty: string, contentValue: string, attribute: 'name' | 'property' = 'property') => {
            let element = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, nameOrProperty);
                document.head.appendChild(element);
            }
            element.setAttribute('content', contentValue);
        };

        // Meta tags básicas
        updateMeta('description', pageDescription, 'name');
        updateMeta('keywords', seo.keywords, 'name');
        updateMeta('theme-color', seo.themeColor, 'name');

        // Open Graph
        updateMeta('og:type', seo.og.type);
        updateMeta('og:title', pageTitle);
        updateMeta('og:description', pageDescription);
        updateMeta('og:url', fullUrl);
        updateMeta('og:site_name', seo.og.siteName);
        updateMeta('og:image', imageUrl);
        updateMeta('og:image:width', '1200');
        updateMeta('og:image:height', '630');
        updateMeta('og:locale', seo.og.locale);

        // Twitter
        updateMeta('twitter:card', seo.twitter.card, 'name');
        updateMeta('twitter:title', pageTitle, 'name');
        updateMeta('twitter:description', pageDescription, 'name');
        updateMeta('twitter:image', imageUrl, 'name');

        // Canonical
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', fullUrl);

    }, [pageTitle, pageDescription, seo, fullUrl, imageUrl]);

    return null;
};

export default SEO;

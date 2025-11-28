import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Quando o elemento entra na tela (mesmo que apenas 10%)
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Para de observar após revelar (animação única)
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            {
                threshold: 0.1, // 10% visível
                rootMargin: '0px 0px -50px 0px', // Offset para disparar um pouco antes
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;

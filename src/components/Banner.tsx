import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { content } from '../Content';

const Banner: React.FC = () => {
  if (!content.banner.enabled) return null;

  const timeLeft = useCountdown(content.banner.endDate);

  return (
    <div
      className="h-10 flex items-center overflow-hidden relative z-50 border-b border-white/10"
      style={{
        backgroundColor: content.banner.styles.backgroundColor,
        color: content.banner.styles.textColor
      }}
    >
      {/* Marquee Text */}
      <div className="flex-1 overflow-hidden relative h-full flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map((i) => (
            <span key={i} className="px-4 font-bold text-sm tracking-widest uppercase opacity-90 flex items-center">
              {Array(8).fill(null).map((_, index) => {
                const parts = content.banner.message.split(content.banner.highlightText);
                return (
                  <span key={index} className="inline-flex items-center">
                    {parts[0]}
                    <span style={{ color: content.banner.styles.highlightColor }} className="mx-1">
                      {content.banner.highlightText.trim()}
                    </span>
                    {parts[1]}
                    <span className="mx-4 opacity-50">•</span>
                  </span>
                );
              })}
            </span>
          ))}
        </div>
      </div>

      {/* Countdown - Fixed Right */}
      <div className="h-full px-4 flex items-center gap-2 z-10 shadow-[-10px_0_20px_rgba(0,0,0,0.5)]" style={{ backgroundColor: content.banner.styles.backgroundColor }}>
        <span className="text-xs opacity-70 hidden sm:inline-block uppercase tracking-wider">Expira em:</span>
        <div className="flex gap-1 font-mono font-bold" style={{ color: content.banner.styles.highlightColor }}>
          <div className="w-6 text-center">{String(timeLeft.days).padStart(2, '0')}d</div>:
          <div className="w-6 text-center">{String(timeLeft.hours).padStart(2, '0')}h</div>:
          <div className="w-6 text-center">{String(timeLeft.minutes).padStart(2, '0')}m</div>:
          <div className="w-6 text-center">{String(timeLeft.seconds).padStart(2, '0')}s</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
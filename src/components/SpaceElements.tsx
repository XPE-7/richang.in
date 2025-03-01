import React from 'react';

export function FloatingAstronaut() {
  return (
    <div className="absolute right-10 bottom-10 w-32 h-32 animate-float opacity-30 pointer-events-none">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19.07 4.93L17.66 6.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19.07 19.07L17.66 17.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4.93 19.07L6.34 17.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export function SpaceStation() {
  return (
    <div className="absolute left-20 top-40 w-24 h-24 animate-float opacity-20 pointer-events-none" style={{ animationDelay: '1s' }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 14H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 4L8 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 4L16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export function Satellite() {
  return (
    <div className="absolute right-40 top-20 w-20 h-20 animate-float opacity-25 pointer-events-none" style={{ animationDelay: '2s' }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    </div>
  );
}

export function Planet() {
  return (
    <div className="absolute left-1/4 bottom-1/4 w-40 h-40 animate-float opacity-10 pointer-events-none" style={{ animationDelay: '1.5s' }}>
      <div className="w-full h-full rounded-full bg-gradient-to-br from-space-nebula to-space-comet blur-xl"></div>
    </div>
  );
}
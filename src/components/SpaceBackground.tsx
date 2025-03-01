import React, { useEffect, useRef } from 'react';
import { FloatingAstronaut, SpaceStation, Satellite, Planet } from './SpaceElements';

export function SpaceBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create stars
    const stars = 100;
    for (let i = 0; i < stars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      containerRef.current.appendChild(star);
    }

    // Create space dust
    const dust = 50;
    for (let i = 0; i < dust; i++) {
      const particle = document.createElement('div');
      particle.className = 'space-dust';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      containerRef.current.appendChild(particle);
    }

    // Create nebulas
    const nebulas = 3;
    for (let i = 0; i < nebulas; i++) {
      const nebula = document.createElement('div');
      nebula.className = 'nebula';
      nebula.style.left = `${Math.random() * 100}%`;
      nebula.style.top = `${Math.random() * 100}%`;
      nebula.style.width = `${200 + Math.random() * 300}px`;
      nebula.style.height = `${200 + Math.random() * 300}px`;
      nebula.style.opacity = '0.1';
      containerRef.current.appendChild(nebula);
    }

    // Create comets
    const comets = 2;
    for (let i = 0; i < comets; i++) {
      const comet = document.createElement('div');
      comet.className = 'comet';
      comet.style.left = `${Math.random() * 100}%`;
      comet.style.top = `${Math.random() * 100}%`;
      comet.style.animation = `orbit ${15 + Math.random() * 10}s linear infinite`;
      containerRef.current.appendChild(comet);
    }
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div 
        ref={containerRef}
        className="absolute inset-0 space-bg"
      />
      <FloatingAstronaut />
      <SpaceStation />
      <Satellite />
      <Planet />
    </div>
  );
}
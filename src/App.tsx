import React, { useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { SpaceBackground } from './components/SpaceBackground';

export default function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!appRef.current) return;
      
      // Handle hover-glow elements
      const glowElements = appRef.current.getElementsByClassName('hover-glow');
      Array.from(glowElements).forEach((element) => {
        const rect = (element as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (element as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (element as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });

      // Handle global hover effect
      const sections = appRef.current.getElementsByTagName('section');
      Array.from(sections).forEach((section) => {
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        section.style.setProperty('--mouse-x', `${x}%`);
        section.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-space-void text-white relative">
      <SpaceBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Achievements />
          <Journey />
          <Projects />
          <Education />
        </main>
        <footer className="bg-space-void text-white py-6 text-center hover-glow traditional-corner border-t border-space-comet/20">
          <p>© 2024 Richang Chaudhary. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
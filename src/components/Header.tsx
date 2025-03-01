import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#journey', label: 'Journey' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 
        ${isScrolled 
          ? 'bg-elementary-light/90 dark:bg-elementary-dark/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-elementary-gray-600 dark:text-elementary-gray-300 hover:text-elementary-accent dark:hover:text-elementary-accent transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-elementary-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-elementary-gray-600 dark:text-elementary-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-slide-down">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-elementary-gray-600 dark:text-elementary-gray-300 hover:text-elementary-accent dark:hover:text-elementary-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
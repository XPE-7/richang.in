import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Sparkles } from 'lucide-react';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const updateMousePosition = (element: HTMLElement, event: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        element.style.setProperty('--mouse-x', `${x}%`);
        element.style.setProperty('--mouse-y', `${y}%`);
      };

      updateMousePosition(sectionRef.current, e);
      if (imageRef.current) {
        updateMousePosition(imageRef.current, e);
      }
    };

    const element = sectionRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-elementary-dark text-white transition-colors duration-300 section-transition"
    >
      <div className="traditional-pattern absolute inset-0 opacity-5" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-left relative z-10">
            <div className="relative mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-elementary-accent dark:text-elementary-accent/90 rounded-full bg-elementary-accent/10 hover-glow traditional-corner">
                <Sparkles className="w-4 h-4" />
                Hello, I'm
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight hover-glow">
              <span className="text-white block transform hover:translate-x-2 transition-transform duration-300">
                Richang
              </span>
              <span className="gradient-text block mt-2 transform hover:translate-x-2 transition-transform duration-300">
                Chaudhary
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg hover-glow traditional-corner">
              Crafting digital experiences through code. CS student exploring the 
              intersection of AI and web technologies.
            </p>
            
            <div className="flex gap-6 mb-12">
              {[
                { href: "https://github.com/XPE-7", icon: <Github />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/richang-chaudhary-904375243/", icon: <Linkedin />, label: "LinkedIn" },
                { href: "mailto:richangchaudhary@gmail.com", icon: <Mail />, label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group traditional-corner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-4 rounded-lg border-2 border-gray-700 hover:border-elementary-accent transition-all duration-300 hover-glow transform hover:scale-110">
                    {React.cloneElement(social.icon, { 
                      className: "w-5 h-5 text-gray-400 group-hover:text-elementary-accent transition-colors duration-300" 
                    })}
                  </div>
                </a>
              ))}
            </div>

            <a
              href="#about"
              className="inline-flex items-center text-gray-400 hover:text-elementary-accent transition-colors duration-300 group hover-glow"
            >
              <span className="mr-2">Discover More</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Image with enhanced styling */}
          <div className="order-1 lg:order-2 relative">
            <div ref={imageRef} className="relative w-[300px] h-[300px] mx-auto">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-elementary-accent/20 to-elementary-secondary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-elementary-accent/10 to-elementary-secondary/10 rounded-full blur-2xl animate-pulse delay-700" />
              
              {/* Main image container with enhanced border effects */}
              <div className="relative h-full w-full rounded-full overflow-hidden group">
                {/* Animated gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-elementary-accent via-elementary-secondary to-elementary-accent rounded-full animate-spin-slow opacity-30" />
                
                {/* Image wrapper */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden bg-elementary-gray-900">
                  <img
                    src="https://i.postimg.cc/2yNSjdKc/finalll.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      setImageError(true);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-elementary-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-elementary-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-elementary-accent rounded-full blur animate-ping" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-elementary-secondary rounded-full blur animate-ping delay-300" />
              
              {/* Circular decorative rings */}
              <div className="absolute -inset-8 border-2 border-dashed border-elementary-accent/20 rounded-full animate-spin-slow" />
              <div className="absolute -inset-16 border-2 border-dotted border-elementary-secondary/20 rounded-full animate-reverse-spin" />

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-elementary-accent/50 rounded-full blur-sm"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
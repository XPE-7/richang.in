import React, { useEffect, useRef } from 'react';
import { Trophy, Star, Award, Medal, Target, Sparkles, ArrowRight } from 'lucide-react';

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const cards = sectionRef.current.getElementsByClassName('achievement-card');
      
      Array.from(cards).forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
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

  const achievements = [
    {
      title: 'Digizest 1.0 - 3rd Place',
      description: 'Built an AI-powered remote access system with real-time video streaming and secure file sharing.',
      icon: <Trophy className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1614036417651-efe5912149d8?auto=format&fit=crop&q=80&w=1000',
      tags: ['AI', 'Security', 'Innovation'],
      stats: [
        { label: 'Teams Competed', value: '50+' },
        { label: 'Prize Pool', value: '₹50K' }
      ]
    },
    {
      title: 'Hackathon Champion',
      description: 'Led team to victory in 24-hour coding challenge, developing an innovative blockchain solution.',
      icon: <Medal className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
      tags: ['Blockchain', 'Leadership', 'Innovation'],
      stats: [
        { label: 'Team Size', value: '4' },
        { label: 'Duration', value: '24h' }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="achievements" 
      className="py-16 md:py-20 bg-elementary-gray-900 text-white transition-colors duration-300 section-transition relative overflow-hidden"
    >
      <div className="traditional-pattern absolute inset-0 opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-elementary-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-elementary-accent/10 rounded-full blur-2xl animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-flex items-center gap-3 hover-glow traditional-corner p-2 relative">
            <Trophy className="w-8 h-8 icon-hover" />
            Achievements
            <Sparkles className="w-6 h-6 absolute -top-4 -right-4 text-elementary-accent animate-pulse" />
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-elementary-accent to-elementary-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group achievement-card hover-glow"
            >
              <div className="relative h-full bg-elementary-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent z-10" />
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-elementary-accent to-elementary-secondary transform group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm">
                      {React.cloneElement(achievement.icon, { 
                        className: "text-white"
                      })}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 relative">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-elementary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {achievement.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base mb-6">
                    {achievement.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    {achievement.stats.map((stat, i) => (
                      <div 
                        key={i}
                        className="text-center p-2 sm:p-3 rounded-lg bg-elementary-accent/5 hover:bg-elementary-accent/10 transition-colors duration-300"
                      >
                        <div className="text-elementary-accent font-bold text-base sm:text-lg">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {achievement.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-elementary-accent/10 text-elementary-accent rounded-full text-xs flex items-center gap-1.5"
                      >
                        <Target className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
                    <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-elementary-accent to-transparent" />
                    <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-to-l from-elementary-accent to-transparent" />
                    <div className="absolute left-0 top-0 h-20 w-1 bg-gradient-to-b from-elementary-accent to-transparent" />
                    <div className="absolute right-0 bottom-0 h-20 w-1 bg-gradient-to-t from-elementary-accent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
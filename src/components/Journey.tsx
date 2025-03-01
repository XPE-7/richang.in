import React, { useEffect, useRef } from 'react';
import { Milestone, History, ArrowRight, Calendar, MapPin, Award, Code2, Sparkles, BookOpen, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Journey() {
  const timelineRef = useScrollAnimation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const cards = sectionRef.current.getElementsByClassName('journey-card');
      
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

  const journeyPoints = [
    {
      year: '2024',
      title: 'Technical Team Member',
      organization: 'TPHxSRMIST',
      location: 'Chennai',
      description: 'Working on cutting-edge AI and blockchain projects, contributing to innovative solutions.',
      type: 'experience',
      icon: <Code2 className="w-5 h-5" />,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
      skills: ['AI', 'Blockchain', 'Web3'],
      achievements: ['Led development of smart contracts', 'Implemented ML models']
    },
    {
      year: '2024',
      title: 'Campus Ambassador',
      organization: 'IMUN',
      location: 'Remote',
      description: 'Leading student engagement initiatives and developing community outreach strategies.',
      type: 'experience',
      icon: <Users className="w-5 h-5" />,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
      skills: ['Leadership', 'Community Building', 'Event Management'],
      achievements: ['Organized 3 major events', 'Built student community']
    },
    {
      year: '2023',
      title: 'Started Computer Science',
      organization: 'SRM Institute of Science and Technology',
      location: 'Chennai',
      description: 'Embarked on my journey in Computer Science, focusing on AI and web technologies.',
      type: 'education',
      icon: <BookOpen className="w-5 h-5" />,
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
      skills: ['Programming', 'Data Structures', 'Algorithms'],
      achievements: ['Academic Excellence', 'Technical Projects']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="journey" 
      className="py-20 bg-elementary-gray-900 text-white transition-colors duration-300 section-transition relative overflow-hidden"
    >
      <div className="traditional-pattern absolute inset-0 opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-elementary-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-elementary-accent/10 rounded-full blur-2xl animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-flex items-center gap-3 hover-glow traditional-corner p-2 relative">
            <History className="w-8 h-8" />
            My Journey
            <Sparkles className="w-6 h-6 absolute -top-4 -right-4 text-elementary-accent animate-pulse" />
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-elementary-accent to-elementary-secondary mx-auto rounded-full" />
        </div>

        <div 
          ref={timelineRef}
          className="max-w-6xl mx-auto relative scroll-fade-in"
        >
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-elementary-accent via-elementary-secondary to-purple-600 transform -translate-x-1/2 rounded-full">
            <div className="absolute inset-0 animate-pulse bg-white/20" />
          </div>

          {journeyPoints.map((point, index) => (
            <div 
              key={index}
              className="relative flex flex-col md:flex-row gap-8 mb-16 group"
            >
              <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-elementary-gray-800 rounded-full border-2 border-elementary-accent transform -translate-x-1/2 flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-500 hover-glow shadow-lg">
                <div className="absolute inset-0 bg-elementary-accent/20 rounded-full animate-ping" />
                {point.icon}
              </div>

              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <div className="journey-card bg-elementary-gray-800/50 backdrop-blur-lg rounded-xl shadow-lg hover-glow traditional-corner transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <img 
                      src={point.image} 
                      alt={point.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{point.year}</span>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-elementary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {point.title}
                    </h3>

                    <p className="text-elementary-accent mb-2 flex items-center gap-2">
                      <Milestone className="w-4 h-4" />
                      {point.organization}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <MapPin className="w-4 h-4" />
                      {point.location}
                    </div>

                    <p className="text-gray-300 text-sm mb-4">
                      {point.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {point.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-elementary-accent/10 text-elementary-accent rounded-full text-xs flex items-center gap-1.5"
                          >
                            <Sparkles className="w-3 h-3" />
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-2">
                        {point.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-gray-400"
                          >
                            <Award className="w-3 h-3 text-elementary-accent" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-elementary-accent to-elementary-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-elementary-accent to-elementary-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
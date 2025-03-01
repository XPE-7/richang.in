import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, School, Award, Sparkles } from 'lucide-react';

export function Education() {
  const education = [
    {
      school: 'SRM Institute of Science and Technology',
      degree: 'B.Tech. Computer Science',
      period: '2023 – Present',
      location: 'Chennai',
      description: 'Focusing on advanced computer science concepts, AI, and modern software development.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
      highlights: [
        'Core CS Fundamentals',
        'AI & Machine Learning',
        'Web Technologies',
        'Software Engineering'
      ]
    },
    {
      school: 'JPS Academy',
      degree: 'CBSE XII',
      period: '2023',
      location: 'Jaora',
      description: 'Completed senior secondary education with focus on science and mathematics.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
      highlights: [
        'Mathematics',
        'Physics',
        'Computer Science',
        'Chemistry'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-elementary-light dark:bg-elementary-dark transition-colors duration-300 section-transition relative overflow-hidden">
      <div className="traditional-pattern absolute inset-0 opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-elementary-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-elementary-accent/10 rounded-full blur-2xl animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-flex items-center gap-3 hover-glow traditional-corner p-2 relative">
            <GraduationCap className="w-8 h-8" />
            Education Journey
            <Sparkles className="w-6 h-6 absolute -top-4 -right-4 text-elementary-accent animate-pulse" />
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-elementary-accent to-elementary-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-elementary-accent via-elementary-secondary to-purple-600 transform -translate-x-1/2 rounded-full">
              <div className="absolute inset-0 animate-pulse bg-white/20" />
            </div>

            {education.map((edu, index) => (
              <div 
                key={index}
                className="relative flex flex-col md:flex-row gap-8 mb-16 group"
              >
                <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full border-2 border-elementary-accent transform -translate-x-1/2 flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-500">
                  <div className="absolute inset-0 bg-elementary-accent/20 rounded-full animate-ping" />
                  <School className="w-5 h-5 text-elementary-accent" />
                </div>

                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover-glow traditional-corner transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <img 
                        src={edu.image} 
                        alt={edu.school}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <div className="flex items-center gap-2 text-white">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.school}
                      </h3>
                      <p className="text-elementary-accent dark:text-elementary-accent/90 mb-2">
                        {edu.degree}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {edu.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                          >
                            <BookOpen className="w-4 h-4 text-elementary-accent" />
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-elementary-accent to-elementary-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
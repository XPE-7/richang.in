import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Briefcase, Award, ArrowRight } from 'lucide-react';

export function Experience() {
  const experienceRef = useScrollAnimation();
  const achievementsRef = useScrollAnimation();

  const experiences = [
    {
      title: 'Technical Team Member',
      company: 'TPHxSRMIST',
      period: 'March 2024 – Current',
      description: 'Working on AI and blockchain projects, focusing on innovative solutions and emerging technologies.'
    },
    {
      title: 'Campus Ambassador',
      company: 'IMUN',
      period: 'January 2024 – Current',
      description: 'Leading student engagement initiatives and developing community outreach strategies.'
    }
  ];

  const achievements = [
    {
      title: 'Digizest 1.0 - 3rd Place',
      description: 'Built an AI-powered remote access system with real-time video streaming and secure file sharing.'
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 section-transition">
      <div className="traditional-pattern absolute inset-0 opacity-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white hover-glow traditional-corner">
          <span className="inline-flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-elementary-accent" />
            Experience
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div ref={experienceRef} className="scroll-fade-in space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover-glow traditional-corner transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-elementary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {exp.title}
                    </h3>
                    <p className="text-elementary-accent dark:text-elementary-accent/90">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>

          <div ref={achievementsRef} className="scroll-fade-in mt-12">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2 hover-glow">
              <Award className="w-6 h-6 text-elementary-accent" />
              Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover-glow traditional-corner transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-elementary-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
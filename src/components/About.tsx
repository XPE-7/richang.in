import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BookOpen, Sparkles } from 'lucide-react';

export function About() {
  const sectionRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();

  const techStacks = [
    {
      category: 'Languages & Core',
      skills: [
        {
          name: 'Python',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          level: 90
        },
        {
          name: 'JavaScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          level: 85
        },
        {
          name: 'TypeScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          level: 80
        },
        {
          name: 'Java',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          level: 75
        }
      ]
    },
    {
      category: 'Frontend & UI',
      skills: [
        {
          name: 'React',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          level: 88
        },
        {
          name: 'Next.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          level: 82
        },
        {
          name: 'Tailwind CSS',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
          level: 85
        },
        {
          name: 'HTML5',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          level: 90
        }
      ]
    },
    {
      category: 'Backend & Database',
      skills: [
        {
          name: 'Node.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          level: 85
        },
        {
          name: 'Django',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
          level: 80
        },
        {
          name: 'MongoDB',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          level: 75
        },
        {
          name: 'PostgreSQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          level: 70
        }
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        {
          name: 'Docker',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          level: 80
        },
        {
          name: 'Git',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          level: 85
        },
        {
          name: 'AWS',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
          level: 70
        },
        {
          name: 'Linux',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
          level: 75
        }
      ]
    }
  ];

  const getLevelLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section 
      id="about" 
      className="py-16 bg-elementary-gray-900 text-white transition-colors duration-300 section-transition relative overflow-hidden"
    >
      <div className="traditional-pattern absolute inset-0 opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-elementary-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-flex items-center gap-3 hover-glow traditional-corner p-2">
            <BookOpen className="w-8 h-8" />
            About Me
          </h2>
        </div>
          
        <div className="max-w-4xl mx-auto">
          <div 
            ref={sectionRef} 
            className="hover-glow traditional-corner bg-elementary-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-lg mb-12 transform transition-all duration-300 hover:-translate-y-1"
          >
            <p className="text-gray-300 leading-relaxed text-base text-center">
              Computer Science student at SRMIST with a passion for creating impactful digital solutions. 
              Focused on the intersection of AI, web development, and innovative technologies.
            </p>
          </div>
            
          <div ref={skillsRef} className="space-y-8">
            {techStacks.map((stack, stackIndex) => (
              <div key={stackIndex} className="relative">
                <h3 className="text-lg font-semibold mb-4 text-elementary-accent border-b border-elementary-accent/20 pb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {stack.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stack.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-card bg-elementary-gray-800/50 backdrop-blur-lg rounded-lg p-4 transform transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="skill-icon w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 p-1.5 transition-all duration-300">
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                          <span className="skill-level block text-xs text-gray-400">{getLevelLabel(skill.level)}</span>
                        </div>
                      </div>
                      <div className="relative h-1.5 bg-elementary-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="skill-progress absolute top-0 left-0 h-full rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
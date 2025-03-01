import React, { useEffect, useRef } from 'react';
import { ExternalLink, Code, GitBranch, Star } from 'lucide-react';

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const cards = sectionRef.current.getElementsByClassName('project-card');
      
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

  const projects = [
    {
      title: 'Invezo',
      description: 'ML-powered stock market analysis web app with real-time data visualization and secure authentication.',
      tags: ['React', 'Flask', 'ML'],
      gradient: 'from-purple-500 to-blue-500',
      icon: <Star className="w-5 h-5" />,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000',
      demoUrl: '#'
    },
    {
      title: 'Titanic Survival Predictor',
      description: 'Machine learning model using ensemble methods to predict survival probability with feature engineering.',
      tags: ['Python', 'ML', 'Data Science'],
      gradient: 'from-blue-500 to-cyan-500',
      icon: <Star className="w-5 h-5" />,
      image: 'https://images.unsplash.com/photo-1682905926517-6be3768e29f0?auto=format&fit=crop&q=80&w=1000',
      demoUrl: '#'
    },
    {
      title: 'Task Manager CLI',
      description: 'Command-line productivity tool with file persistence and intuitive task management.',
      tags: ['Python', 'CLI'],
      gradient: 'from-cyan-500 to-purple-500',
      icon: <Star className="w-5 h-5" />,
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1000',
      demoUrl: '#'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-16 md:py-20 bg-white dark:bg-gray-800 transition-colors duration-300 section-transition"
    >
      <div className="traditional-pattern absolute inset-0 opacity-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-flex items-center gap-3 hover-glow traditional-corner p-2">
            <Code className="w-8 h-8 icon-hover" />
            Featured Projects
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-elementary-accent to-elementary-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group project-card hover-glow traditional-corner"
            >
              <div className="relative h-full bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl dark:shadow-elementary-accent/20">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient} transform group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm icon-hover`}>
                      {React.cloneElement(project.icon, { 
                        className: "text-white"
                      })}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-elementary-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <a 
                      href={project.demoUrl}
                      className="p-2 rounded-full hover:bg-elementary-accent/10 transition-colors duration-300 icon-hover"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-elementary-accent" />
                    </a>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs flex items-center gap-1.5 group-hover:bg-elementary-accent/10 group-hover:text-elementary-accent transition-all duration-300"
                      >
                        <GitBranch className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Hover Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-elementary-accent to-transparent" />
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-elementary-accent to-transparent" />
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-elementary-accent to-transparent" />
                  <div className="absolute right-0 bottom-0 h-full w-1 bg-gradient-to-t from-elementary-accent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      type: 'work',
      title: 'Software Development Intern',
      organization: 'Five Data Products and Solutions Pvt. Ltd.',
      period: '2025 - Present',
      location: 'India',
      description: 'Currently working as an intern, gaining hands-on experience in software development, contributing to real-world projects, and learning industry best practices.',
      achievements: [
        'Developing and maintaining web applications',
        'Collaborating with cross-functional teams',
        'Learning modern development frameworks and tools',
        'Contributing to code reviews and documentation'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      organization: 'MLR Institute Of Technology',
      period: '2021 - 2025',
      location: 'India',
      description: 'Completed graduation in Computer Science with a strong foundation in programming, algorithms, data structures, and software engineering principles.',
      achievements: [
        'Graduated with strong academic performance',
        'Completed multiple programming projects',
        'Studied modern computer science concepts',
        'Developed problem-solving and analytical skills'
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="gradient-text">Experience & Education</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              My journey through learning and professional growth
            </p>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full mt-6"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan opacity-50"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-5 h-5 rounded-full bg-gradient-neon border-4 border-background shadow-glow-neon animate-glow-pulse"></div>

                  {/* Content */}
                  <div className="ml-20">
                    <div className="card-hover bg-gradient-card p-6 rounded-xl">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {exp.type === 'work' ? (
                            <Briefcase className="h-6 w-6 text-neon-blue" />
                          ) : (
                            <GraduationCap className="h-6 w-6 text-neon-purple" />
                          )}
                          <div>
                            <h3 className="text-xl font-orbitron font-semibold text-foreground">
                              {exp.title}
                            </h3>
                            <p className="text-neon-cyan font-medium">{exp.organization}</p>
                          </div>
                        </div>
                        
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-neon-cyan">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-3 animate-pulse"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
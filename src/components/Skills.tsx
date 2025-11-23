import { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Smartphone, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="h-6 w-6" />,
      color: 'neon-blue',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'React.js', level: 82 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="h-6 w-6" />,
      color: 'neon-purple',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 78 },
        { name: 'REST APIs', level: 82 },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <Cloud className="h-6 w-6" />,
      color: 'neon-cyan',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Firebase', level: 70 },
        { name: 'AWS', level: 60 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: <GitBranch className="h-6 w-6" />,
      color: 'neon-blue',
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Postman', level: 85 },
        { name: 'Linux', level: 72 }
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I use to build amazing digital experiences
            </p>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`card-hover bg-gradient-card p-6 rounded-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-${category.color}/20 text-${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/70 rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 300}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Tech Stack Icons */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-orbitron font-semibold mb-8 text-foreground">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                'C', 'Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'MongoDB', 'PostgreSQL',
'React', 'Node.js', 'Express.js', 'Data Structures', 'REST API', 'OOP', 'Git', 'GitHub', 'Linux',
'Tailwind CSS', 'Bootstrap', 'VS Code'


              ].map((tech, index) => (
                <div
                  key={index}
                  className={`card-hover bg-card/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-neon-blue/20 transition-all duration-500 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${800 + (index * 50)}ms` }}
                >
                  <span className="text-neon-blue font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
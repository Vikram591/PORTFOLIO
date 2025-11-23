import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment integration, and advanced search functionality.',
      image: '/api/placeholder/400/250',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      githubUrl: '#',
      demoUrl: '#',
      category: 'Full Stack'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and progress tracking.',
      image: '/api/placeholder/400/250',
      techStack: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      githubUrl: '#',
      demoUrl: '#',
      category: 'Frontend'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with customizable charts, filters, and export capabilities.',
      image: '/api/placeholder/400/250',
      techStack: ['Python', 'Django', 'D3.js', 'PostgreSQL'],
      githubUrl: '#',
      demoUrl: '#',
      category: 'Data Science'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Database className="h-5 w-5" />;
      case 'Frontend':
        return <Code className="h-5 w-5" />;
      case 'Data Science':
        return <Globe className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions and technical expertise through real-world applications
            </p>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`card-hover bg-gradient-card rounded-xl overflow-hidden group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">{getCategoryIcon(project.category)}</div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 bg-card/80 backdrop-blur-sm text-neon-blue text-xs px-2 py-1 rounded-full border border-neon-blue/30">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-orbitron font-semibold text-foreground group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-secondary/50 text-neon-cyan px-2 py-1 rounded-md border border-neon-cyan/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="neon" size="sm" className="flex-1 text-xs">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                    <Button variant="glass" size="sm" className="flex-1 text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="glass" size="lg" className="group">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
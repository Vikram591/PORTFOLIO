import { useEffect, useRef, useState } from 'react';
import profilePhoto from '@/assets/profile-photo.jpeg';
import resumePDF from "@/assets/Vikram_kumar_resume.pdf";


const About = () => {
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

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-neon rounded-2xl blur-xl opacity-30 animate-glow-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-card rounded-2xl p-1">
                    <img 
                      src={profilePhoto} 
                      alt="Gandla Vikram Kumar - Professional Photo"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card-hover bg-card/50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-orbitron font-bold text-neon-blue">2025</div>
                  <div className="text-sm text-muted-foreground">Graduate</div>
                </div>
                <div className="card-hover bg-card/50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-orbitron font-bold text-neon-purple">Current</div>
                  <div className="text-sm text-muted-foreground">Intern</div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className={`space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am <span className="text-neon-blue font-semibold">Gandla Vikram Kumar</span>, 
                  a Computer Science graduate and currently an Intern at{' '}
                  <span className="text-neon-purple font-semibold">Five Data Products and Solutions Pvt. Ltd</span>.
                </p>
                
                <p>
                  Passionate about building innovative software solutions, I thrive on exploring 
                  new technologies and applying my skills to real-world projects that make a difference.
                </p>

                <p>
                  My journey in technology is driven by curiosity and a constant desire to learn. 
                  I believe in writing clean, efficient code and creating user-friendly applications 
                  that solve genuine problems.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4 pt-6">
                <h3 className="text-xl font-orbitron font-semibold text-neon-cyan mb-4">Key Highlights</h3>
                <div className="space-y-3">
                  {[
                    'I have completed my B.Tech in Computer Science at MLR Institute of Technology.',
                    'Active Intern at Five Data and Products Pvt. Ltd.',
                    'Strong Interest in Modern Technologies',
                    'Focus on Innovation and Problem-Solving'
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
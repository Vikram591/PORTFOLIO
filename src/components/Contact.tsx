import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Download, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactLinks = [
    {
      label: 'Email',
      value: 'vikramvikky7832@gmail.com',
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:vikramvikky7832@gmail.com',
      color: 'neon-blue'
    },
    {
      label: 'GitHub',
      value: 'https://github.com/Vikram591',
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/Vikram591',
      color: 'neon-purple'
    },
    {
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/gandla-vikram-kumar-16b3aa301/',
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://www.linkedin.com/in/gandla-vikram-kumar-16b3aa301/',
      color: 'neon-cyan'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I’m open to internships, collaborations, and meaningful engineering opportunities — let’s build something impactful together.
            </p>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="card-hover bg-gradient-card p-8 rounded-xl">
                <h3 className="text-2xl font-orbitron font-semibold mb-6 text-foreground">
                  Send a Message
                </h3>

                {/* Formspree Integration */}
                <form
                  action="https://formspree.io/f/mpwnnwnk" 
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-secondary/50 border-border focus:border-neon-blue transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-secondary/50 border-border focus:border-neon-blue transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-secondary/50 border-border focus:border-neon-blue transition-colors min-h-[120px] resize-none"
                      placeholder="Tell me about your project or just say hello..."
                      required
                    />
                  </div>

                  <Button type="submit" variant="neon" size="lg" className="w-full group">
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className={`space-y-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="card-hover bg-gradient-card p-6 rounded-xl">
                <h3 className="text-xl font-orbitron font-semibold mb-4 text-foreground">
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-neon-cyan" />
                    <span>India</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-5 w-5 text-neon-blue" />
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>

              {/* Contact Links */}
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="card-hover bg-gradient-card p-4 rounded-xl flex items-center gap-4 group transition-all duration-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={`p-3 rounded-lg bg-${link.color}/20 text-${link.color} group-hover:scale-110 transition-transform`}>
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{link.label}</div>
                      <div className="text-foreground font-medium group-hover:text-neon-blue transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

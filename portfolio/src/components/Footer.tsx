import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground font-inter">
            © 2025 Gandla Vikram Kumar | Built with{' '}
            <Heart className="inline h-4 w-4 text-neon-blue animate-pulse mx-1" />
            and modern web technologies
          </p>
          
          {/* Subtle glow effect */}
          <div className="mt-4 flex justify-center">
            <div className="w-32 h-0.5 bg-gradient-neon opacity-30 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
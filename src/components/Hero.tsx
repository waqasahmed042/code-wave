import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(var(--codewave-dark) / 0.9), hsl(var(--codewave-primary) / 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
        backgroundAttachment: 'fixed',
        transition: 'background-position 0.1s ease-out'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge className="mb-6 bg-primary/20 text-primary-foreground border-primary/30 hover:bg-primary/30 transition-colors">
            <Star className="w-3 h-3 mr-1" />
            FOCUSED ON YOUR SUCCESS
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Discover Premium Solutions for
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              Digital Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-slide-up">
            Expert Browser Extensions, Google Add-ons, Office Add-ins & 
            Custom Web Development Solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-strong transition-all transform hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              Book a Consultation
              <span className="ml-2 text-sm opacity-75">- it's free</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white px-8 py-6 text-lg backdrop-blur-sm"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Awards Section */}
          <div className="animate-fade-in">
            <p className="text-gray-300 mb-4 text-sm uppercase tracking-wider">
              Awards and Certifications
            </p>
            <div className="flex flex-wrap justify-center gap-6 opacity-70">
              {/* Placeholder for awards badges */}
              <div className="bg-white/10 rounded-lg px-4 py-2 text-white text-sm">
                Excellence Award 2024
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2 text-white text-sm">
                Top Developer
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2 text-white text-sm">
                Certified Partner
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2 text-white text-sm">
                5-Star Rating
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Floaters */}
      <div className="absolute bottom-8 left-8 hidden lg:flex flex-col gap-3">
        <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors text-sm">
          📞 Call us at +1 (234) 567-890
        </a>
        <a href="mailto:contact@codewave.com" className="text-white/80 hover:text-white transition-colors text-sm">
          ✉️ Email us at contact@codewave.com
        </a>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col gap-3 text-right">
        <a href="https://wa.me/1234567890" className="text-white/80 hover:text-white transition-colors text-sm">
          💬 Chat with us on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Hero;
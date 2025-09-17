import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import ParticleBackground from "./Particles";
import { Link } from "react-router-dom";
import team_1 from "@/assets/team-1.png";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, hsl(var(--codewave-dark) / 0.9), hsl(var(--codewave-primary) / 0.8))`,
        }}
      >
        {/* Particles confined to Hero section */}
        <ParticleBackground />

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
              <Link to={"/projects"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white px-8 py-6 text-lg backdrop-blur-sm"
                >
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Awards Section */}
            <div className="animate-fade-in">
              <p className="text-gray-300 mb-4 text-sm uppercase tracking-wider">
                Awards and Certifications
              </p>
              <div className="flex flex-wrap justify-center gap-6 opacity-70">
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
            📞 Call us at +92 345 3088845
          </a>
          <a href="mailto:contact@codewave.com" className="text-white/80 hover:text-white transition-colors text-sm">
            ✉️ Email us at codewave.it@gmail.com
          </a>
        </div>

        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col gap-3 text-right">
          <a href="https://wa.me/03453088845" target="_blank" className="text-white/80 hover:text-white transition-colors text-sm">
            💬 Chat with us on WhatsApp
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                OUR STORY
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Building Digital Excellence Since Day One
              </h2>
              <p className="text-muted-foreground mb-6">
                CodeWave Academy was founded with a simple mission: to bridge the gap between complex technology and practical business solutions. We specialize in creating browser extensions, Google add-ons, Office add-ins, and custom web applications that drive real business value.
              </p>
              <p className="text-muted-foreground">
                Our team combines deep technical expertise with a thorough understanding of business needs, ensuring that every solution we deliver is not just technically sound, but also strategically aligned with our clients' goals.
              </p>
            </div>
            <div className="relative">
              <img
                src={team_1}
                alt="Team collaboration"
                className="rounded-lg shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
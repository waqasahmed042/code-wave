import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Award, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/Particles";
import team_2 from "@/assets/team-2.png";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in working closely with our clients to understand their unique needs and goals."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Our commitment to quality ensures robust, scalable, and maintainable solutions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions."
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, hsl(var(--codewave-dark) / 0.9), hsl(var(--codewave-primary) / 0.8))`,
        }}
      >
        {/* Particles confined to About hero section */}
        <ParticleBackground />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-white/80 mb-4">
              <span>Home</span>
              <ArrowRight className="w-4 h-4" />
              <span>About Us</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Us
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We are a team of passionate developers and designers dedicated to creating innovative digital solutions that transform businesses.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
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
                src={team_2}
                alt="Team collaboration"
                className="rounded-lg shadow-strong"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              OUR VALUES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide every decision we make and every solution we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="group hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
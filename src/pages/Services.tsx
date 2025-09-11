import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Puzzle, FileText, Code, Chrome, Monitor, ArrowRight, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import ParticleBackground from "@/components/Particles";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: "browser-extensions",
      title: "Browser Extensions",
      description: "Enhance user experience with custom browser extensions that integrate seamlessly with Chrome, Firefox, and other browsers.",
      icon: Chrome,
      features: ["Chrome Extensions", "Firefox Add-ons", "Cross-browser Support", "API Integration"],
      technologies: ["JavaScript", "React", "Chrome APIs", "WebExtensions"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: "google-addons",
      title: "Google Add-ons",
      description: "Boost productivity with custom Google Workspace add-ons for Gmail, Docs, Sheets, and other Google services.",
      icon: Puzzle,
      features: ["Gmail Add-ons", "Google Sheets Add-ons", "Google Docs Integration", "Calendar Extensions"],
      technologies: ["Google Apps Script", "HTML Service", "Google APIs", "OAuth"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: "office-addins",
      title: "Office Add-ins",
      description: "Transform workflows with powerful Microsoft Office add-ins for Word, Excel, PowerPoint, and Outlook.",
      icon: FileText,
      features: ["Excel Add-ins", "Word Extensions", "Outlook Integration", "PowerPoint Tools"],
      technologies: ["Office.js", "TypeScript", "React", "Microsoft Graph"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Build scalable, modern web applications with cutting-edge technologies and best practices.",
      icon: Globe,
      features: ["Custom Web Apps", "E-commerce Solutions", "API Development", "Database Design"],
      technologies: ["React", "Node.js", "TypeScript", "Next.js", "MongoDB", "PostgreSQL"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Create stunning, user-friendly interfaces that captivate users and enhance brand identity.",
      icon: Monitor,
      features: ["User Interface Design", "User Experience Research", "Prototyping", "Design Systems"],
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "Miro"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: "custom-solutions",
      title: "Custom Solutions",
      description: "Tailored development solutions to meet your unique business requirements and challenges.",
      icon: Code,
      features: ["Custom Development", "System Integration", "API Development", "Consulting"],
      technologies: ["Python", "Java", "C#", "AWS", "Docker", "Kubernetes"],
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section
        className="relative py-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, hsl(var(--codewave-dark) / 0.9), hsl(var(--codewave-primary) / 0.8))`,
        }}
      >
        {/* Particles confined to Teams hero section */}
        <ParticleBackground />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-white/80 mb-4 animate-fade-in">
              <span>Home</span>
              <ArrowRight className="w-4 h-4" />
              <span>Services</span>
            </div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Services
            </motion.h1>

            <motion.p
              className="text-xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We provide tailored digital solutions including web and mobile app development, UI/UX design, cloud integration, and AI-powered analytics—helping businesses innovate, scale, and thrive in the digital era.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              OUR EXPERTISE
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Top Custom Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Turning your vision into reality with CodeWave's premium custom solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                        Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {service.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{service.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Ready to bring your ideas to life? Let's discuss your project requirements.
            </p>
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-medium px-8">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
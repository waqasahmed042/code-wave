import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, FileText, Palette, Code, TestTube, Rocket, CheckCircle, Import } from "lucide-react";

const Process = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const steps = [
    {
      id: 1,
      animation: 'fade-right',
      title: "Project Planning & Strategy",
      description: "We start by understanding your requirements and creating a comprehensive roadmap for your project.",
      features: ["Defining project scope", "Setting up development environment", "Assigning team members"],
      icon: ClipboardList,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      animation: 'fade-left',
      title: "Analysis & Documentation",
      description: "Thorough analysis of requirements and creation of detailed technical documentation.",
      features: ["Requirements gathering", "Technical architecture", "Project timeline"],
      icon: FileText,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      animation: 'fade-right',
      title: "Design & Prototyping",
      description: "Creating user-friendly designs and interactive prototypes for your approval.",
      features: ["UI/UX design", "Interactive prototypes", "Design system creation"],
      icon: Palette,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      animation: 'fade-left',
      title: "Implementation & Coding",
      description: "Building your solution using best practices and modern development methodologies.",
      features: ["Clean code development", "API integration", "Security implementation"],
      icon: Code,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      animation: 'fade-right',
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing to ensure your solution works flawlessly across all platforms.",
      features: ["Automated testing", "Manual QA", "Performance optimization"],
      icon: TestTube,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 6,
      animation: 'fade-left',
      title: "Deployment & Launch",
      description: "Seamless deployment and ongoing support to ensure your success.",
      features: ["Production deployment", "Performance monitoring", "User training"],
      icon: Rocket,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <CheckCircle className="w-3 h-3 mr-1" />
            OUR PROCESS
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Custom Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An insight into our methodical development process. From concept to code, we transform ideas into results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className="relative">
                  {/* Desktop Layout */}
                  <div className={`hidden lg:flex items-center ${isEven ? '' : 'flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div data-aos={step.animation} className={`w-5/12 overflow-hidden ${isEven ? 'pr-8' : 'pl-8'}`}>
                      <Card className="group hover:shadow-medium transition-all duration-500 transform hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                            <IconComponent className="w-full h-full text-white" />
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {step.id}. {step.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {step.description}
                          </p>
                          <ul className="space-y-2">
                            {step.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Center Circle */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-medium">
                        {step.id}
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-5/12"></div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <Card className="group hover:shadow-medium transition-all duration-500">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} p-2.5 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <IconComponent className="w-full h-full text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {step.id}. {step.title}
                            </h3>
                            <p className="text-muted-foreground mb-3">
                              {step.description}
                            </p>
                            <ul className="space-y-1">
                              {step.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-sm">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
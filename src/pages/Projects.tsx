import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Code, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ProductivityPlus",
      subtitle: "Chrome Extension for Task Management",
      description: "A powerful browser extension that helps users organize tasks, set reminders, and boost productivity directly from their browser.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      category: "Browser Extension",
      technologies: ["JavaScript", "Chrome API", "React"],
      link: "#"
    },
    {
      id: 2,
      title: "SmartDocs",
      subtitle: "Google Workspace Add-on",
      description: "Intelligent document management system that integrates seamlessly with Google Workspace for enhanced collaboration.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop",
      category: "Google Add-on",
      technologies: ["Google Apps Script", "React", "Cloud Functions"],
      link: "#"
    },
    {
      id: 3,
      title: "DataAnalyzer Pro",
      subtitle: "Microsoft Office Add-in",
      description: "Advanced data analysis tool for Excel that provides real-time insights and automated reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "Office Add-in",
      technologies: ["Office.js", "TypeScript", "Azure"],
      link: "#"
    },
    {
      id: 4,
      title: "TechCorp Portal",
      subtitle: "Enterprise Web Application",
      description: "Comprehensive business management platform with real-time analytics, user management, and workflow automation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      id: 5,
      title: "FinanceTracker",
      subtitle: "Personal Finance Browser Extension",
      description: "Smart financial tracking extension that monitors expenses and provides budget insights across multiple platforms.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      category: "Browser Extension",
      technologies: ["Vue.js", "Chrome API", "Chart.js"],
      link: "#"
    },
    {
      id: 6,
      title: "TeamSync",
      subtitle: "Collaboration Google Add-on",
      description: "Streamlined team communication tool that enhances Google Workspace with advanced scheduling and project management.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      category: "Google Add-on",
      technologies: ["Google Apps Script", "Firebase", "Material-UI"],
      link: "#"
    }
  ];

  const categories = ["All", "Browser Extension", "Google Add-on", "Office Add-in", "Web Development"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-codewave-dark/90"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-white/80 mb-4">
              <span>Home</span>
              <ArrowRight className="w-4 h-4" />
              <span>Projects</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Projects
            </h1>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our case studies to see how our cutting-edge technology solutions have helped businesses achieve their goals and overcome their challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {project.subtitle}
                  </p>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className="w-full group/btn" 
                    variant="outline"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Lead Developer",
      specialization: "Browser Extensions & Chrome APIs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in creating powerful browser extensions with 8+ years of experience in JavaScript and Chrome API development.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Google Workspace Specialist",
      specialization: "Google Add-ons & Apps Script",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Certified Google Apps Script developer specializing in seamless Google Workspace integrations and automation.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Office Add-ins Expert",
      specialization: "Microsoft Office Integration",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Microsoft certified developer with extensive experience in Office.js and Azure integration for enterprise solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Full-Stack Developer",
      specialization: "Web Applications & UI/UX",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Creative full-stack developer with a passion for creating beautiful, user-friendly web applications and interfaces.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 5,
      name: "David Kim",
      role: "Technical Lead",
      specialization: "Architecture & DevOps",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Senior technical architect ensuring scalable, secure, and maintainable solutions across all our development projects.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "Project Manager",
      specialization: "Client Relations & Strategy",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      bio: "Experienced project manager ensuring smooth project delivery and maintaining excellent client relationships.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            OUR TEAM
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Meet the Experts Behind CodeWave
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of talented professionals brings together years of experience 
            in cutting-edge web technologies and digital solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id}
              className="group hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-primary font-medium mb-2">
                  {member.role}
                </p>
                
                <Badge variant="outline" className="mb-4 text-xs">
                  {member.specialization}
                </Badge>

                <p className="text-muted-foreground text-sm mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-primary-foreground border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Want to Join Our Team?
              </h3>
              <p className="mb-6 opacity-90">
                We're always looking for talented individuals who share our passion 
                for creating exceptional digital solutions.
              </p>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                View Open Positions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
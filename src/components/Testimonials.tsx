import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "CodeWave's attention to detail and commitment to deadlines was fantastic. Their browser extension development expertise helped us boost user engagement by 300%. They're not just vendors, they're true partners.",
      rating: 5,
      project: "Chrome Extension Development"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder",
      company: "ProductivityPro",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Working with CodeWave on our Google Workspace add-ons was a game-changer. As a first-time founder, I felt supported and understood every step of the way. The team delivered beyond expectations.",
      rating: 5,
      project: "Google Add-ons Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Operations Director",
      company: "Enterprise Solutions Ltd",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The Office add-ins developed by CodeWave transformed our workflow efficiency. Their technical expertise and understanding of enterprise needs made the entire process seamless and successful.",
      rating: 5,
      project: "Microsoft Office Add-ins"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Star className="w-3 h-3 mr-1" />
            TESTIMONIALS
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Success Stories From Our Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with CodeWave Academy.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm overflow-hidden h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-primary/30 transform rotate-180" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-foreground mb-6 italic flex-grow">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Project Badge */}
                      <Badge variant="outline" className="mb-4 text-xs self-start">
                        {testimonial.project}
                      </Badge>

                      {/* Author Info */}
                      <div className="flex items-center mt-auto">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform"
                        />
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              50+
            </div>
            <div className="text-muted-foreground">
              Happy Clients
            </div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              100+
            </div>
            <div className="text-muted-foreground">
              Projects Completed
            </div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              98%
            </div>
            <div className="text-muted-foreground">
              Client Satisfaction
            </div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <div className="text-muted-foreground">
              Support Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Heart
} from "lucide-react";
import codewaveLogo from "@/assets/codewave-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    { label: "Browser Extensions", href: "#services" },
    { label: "Google Add-ons", href: "#services" },
    { label: "Office Add-ins", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Custom Solutions", href: "#services" }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: Mail,
      text: "hello@codewave.com",
      href: "mailto:hello@codewave.com"
    },
    {
      icon: MapPin,
      text: "123 Tech Street, San Francisco, CA 94105",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-codewave-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with CodeWave
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates on development trends and our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary"
              />
              <Button className="bg-gradient-primary text-primary-foreground hover:shadow-medium whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src={codewaveLogo} alt="CodeWave Academy" className="h-12 w-12" />
              <span className="ml-3 text-2xl font-bold">CodeWave</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming ideas into powerful digital solutions. We specialize in browser extensions, 
              add-ons, and custom web development that drives business growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors group"
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <li key={index}>
                    <a 
                      href={contact.href}
                      className="flex items-start text-gray-300 hover:text-primary transition-colors group"
                    >
                      <IconComponent className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="leading-relaxed">{contact.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} CodeWave Academy. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
              <span>by CodeWave Team</span>
            </div>
          </div>
          
          <Separator className="my-4 bg-white/10" />
          
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
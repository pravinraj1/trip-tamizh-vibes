import { MapPin, Phone, Mail, Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/ed690350-b1d8-47ca-a12a-035f888d64c8.png" 
                alt="TripTamizh Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Travel Goes Here - Your trusted partner for Tamil Nadu adventures since 1989. 
              Creating unforgettable memories for students across South India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Youtube className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "IV Tour Packages",
                "Self-Drive Rentals",
                "Destinations",
                "Gallery",
                "Contact Us"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Our Services</h3>
            <ul className="space-y-3">
              {[
                "College Industrial Visits",
                "Self-Drive Car Rentals",
                "Group Tour Packages",
                "Adventure Tours",
                "Cultural Experiences",
                "Corporate Outings",
                "Custom Itineraries"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-secondary-foreground/80">
                    123 Anna Salai, T. Nagar<br />
                    Chennai, Tamil Nadu 600017
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm text-secondary-foreground/80">+91 98765 43210</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm text-secondary-foreground/80">info@triptamizh.com</p>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm text-secondary-foreground/80">WhatsApp: +91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-secondary-foreground/80">
                © 2024 TripTamizh. All rights reserved. | 
                <a href="#" className="hover:text-primary transition-colors ml-1">Privacy Policy</a> | 
                <a href="#" className="hover:text-primary transition-colors ml-1">Terms & Conditions</a>
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-secondary-foreground/60">
                Powered by TripTamizh Team
              </p>
            </div>
          </div>
          
          {/* Tamil Tagline */}
          <div className="text-center mt-6">
            <p className="text-lg font-semibold text-primary">
              "Namma Trip. Namma Route. Namma TripTamizh."
            </p>
            <p className="text-sm text-secondary-foreground/70 mt-1">
              Making Tamil Nadu accessible to every student since 1989
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
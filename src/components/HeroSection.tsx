import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-tamilnadu.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/ed690350-b1d8-47ca-a12a-035f888d64c8.png" 
            alt="TripTamizh Logo" 
            className="h-24 md:h-32 mx-auto mb-4"
          />
        </div>
        
        {/* Tagline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Namma Trip. Namma Route.
          <br />
          <span className="text-accent">Namma TripTamizh.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Experience Tamil Nadu like never before with our self-drive cars and college industrial visit packages
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Book Your IV Tour
          </Button>
          <Button variant="temple" size="lg" className="text-lg px-8 py-6">
            Rent a Self-Drive Car
          </Button>
        </div>
        
        {/* Quick Contact */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Now
          </Button>
          <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
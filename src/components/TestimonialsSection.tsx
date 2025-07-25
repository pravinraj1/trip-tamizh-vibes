import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      college: "Anna University, Chennai",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c5db?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "TripTamizh made our college IV trip to Infosys amazing! Professional service and great memories.",
      trip: "Bangalore IV Tour"
    },
    {
      name: "Arjun Kumar",
      college: "PSG College, Coimbatore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "The self-drive car rental was perfect for our Ooty trip. Clean car, great support!",
      trip: "Ooty Weekend Trip"
    },
    {
      name: "Meera Patel",
      college: "VIT, Vellore",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "Budget-friendly and well-organized. Our class had an unforgettable experience in Pondicherry!",
      trip: "Pondicherry Cultural Tour"
    },
    {
      name: "Rohit Menon",
      college: "NIT, Trichy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
      rating: 5,
      text: "Excellent coordination and safety measures. Highly recommend for college groups!",
      trip: "Kerala Backwaters IV"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            What Students <span className="text-primary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from thousands of happy students across Tamil Nadu
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors">
                <Quote className="h-8 w-8" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-accent" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Student Info */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.college}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.trip}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Video Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-temple rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Watch Our Student Adventures</h3>
            <p className="mb-6 text-white/90">See real moments from our trips and industrial visits</p>
            
            {/* Placeholder for video - would normally embed YouTube/Vimeo */}
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-white/80">Student Adventure Video Compilation</p>
              <p className="text-sm text-white/60 mt-2">Click to watch our latest trip highlights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
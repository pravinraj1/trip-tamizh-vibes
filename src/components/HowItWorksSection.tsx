import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, MessageCircle, Car } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Select Service",
      description: "Choose between Self-Drive Car Rental or Industrial Visit Tour package",
      color: "bg-gradient-hero"
    },
    {
      icon: Calendar,
      title: "Choose Date & Destination",
      description: "Pick your preferred dates and select from our wide range of destinations",
      color: "bg-gradient-temple"
    },
    {
      icon: MessageCircle,
      title: "Get Confirmation",
      description: "Receive instant confirmation and trip details via WhatsApp",
      color: "bg-gradient-sunset"
    },
    {
      icon: Car,
      title: "Trip Starts!",
      description: "Enjoy your adventure with 24/7 support and seamless experience",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple 4-step process to book your perfect Tamil Nadu adventure
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 z-0"></div>
                )}
                
                <Card className="relative z-10 group hover:shadow-warm transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="mb-6 text-white/90">Join thousands of students who have already experienced the magic of Tamil Nadu</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  Book IV Tour Now
                </button>
                <button className="bg-white/20 border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                  Rent Car Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
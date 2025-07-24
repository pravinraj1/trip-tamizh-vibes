import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Car } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Packages & <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Student-friendly pricing with no hidden costs. Choose what works best for your group!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* IV Tour Package */}
          <Card className="group hover:shadow-warm transition-all duration-300 border-2 hover:border-primary/30 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gradient-hero text-white px-3 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-foreground">IV Tour Package</CardTitle>
              <div className="text-4xl font-bold text-primary mt-4">
                ₹499
                <span className="text-lg text-muted-foreground font-normal">/student</span>
              </div>
              <p className="text-muted-foreground">Perfect for college groups</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {[
                  "Company/Factory visits included",
                  "Professional tour guide",
                  "Transportation (AC bus/van)",
                  "Entry fees to all locations",
                  "Group photographs",
                  "24/7 emergency support",
                  "Refreshments during travel",
                  "Educational certificates"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary/10 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Popular Destinations:</h4>
                <p className="text-sm text-muted-foreground">
                  Bangalore (Tech Parks), Chennai (IT Companies), Coimbatore (Textile Mills), 
                  Kerala (Spice Plantations), Puducherry (Cultural Sites)
                </p>
              </div>
              
              <Button variant="hero" className="w-full text-lg py-6">
                Get Custom Quote
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                *Minimum 25 students required. Price varies by destination and duration.
              </p>
            </CardContent>
          </Card>
          
          {/* Car Rental Package */}
          <Card className="group hover:shadow-warm transition-all duration-300 border-2 hover:border-secondary/30 relative overflow-hidden">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-temple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Car className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-foreground">Self-Drive Car Rental</CardTitle>
              <div className="text-4xl font-bold text-secondary mt-4">
                ₹999
                <span className="text-lg text-muted-foreground font-normal">/day</span>
              </div>
              <p className="text-muted-foreground">Freedom to explore</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {[
                  "Well-maintained vehicles",
                  "GPS navigation system",
                  "Fuel cost included*",
                  "Pickup & drop service",
                  "Driver on request (+₹500/day)",
                  "24/7 roadside assistance",
                  "Comprehensive insurance",
                  "Flexible booking dates"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-secondary/10 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Vehicle Options:</h4>
                <p className="text-sm text-muted-foreground">
                  Hatchback (4 seater), Sedan (5 seater), SUV (7 seater), 
                  Tempo Traveller (12 seater) - All AC and GPS enabled
                </p>
              </div>
              
              <Button variant="temple" className="w-full text-lg py-6">
                Check Availability
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                *Fuel included up to 200km/day. Security deposit required.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Special Offers */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-sunset rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Special Student Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15% OFF</div>
                <p className="text-sm text-white/90">For groups of 50+ students</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">FREE</div>
                <p className="text-sm text-white/90">Photography for IV tours</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <p className="text-sm text-white/90">WhatsApp support included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
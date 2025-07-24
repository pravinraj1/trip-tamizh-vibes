import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Building2, Navigation, Fuel, MapPin, Shield } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our two specialized services designed for students and young travelers
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Self-Drive Car Rentals */}
          <Card className="group hover:shadow-warm transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Car className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-foreground">Self-Drive Car Rentals</CardTitle>
              <p className="text-muted-foreground">
                Freedom to explore Tamil Nadu at your own pace
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Navigation className="h-5 w-5 text-primary" />
                  <span className="text-sm">GPS Navigation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Fuel className="h-5 w-5 text-primary" />
                  <span className="text-sm">Fuel Included</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Pickup & Drop</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Perfect for:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Weekend getaways with friends</li>
                  <li>• Family trips to hill stations</li>
                  <li>• College group adventures</li>
                  <li>• Photography tours</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Starting from ₹999/day</div>
                <Button variant="hero" className="w-full">
                  Rent Now
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Industrial Visit Tours */}
          <Card className="group hover:shadow-warm transition-all duration-300 border-2 hover:border-primary/20">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-temple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-foreground">Industrial Visit Tours</CardTitle>
              <p className="text-muted-foreground">
                Educational trips that combine learning with adventure
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-secondary" />
                  <span className="text-sm">IT Parks</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span className="text-sm">Safety First</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-sm">Multiple States</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="h-5 w-5 text-secondary" />
                  <span className="text-sm">Transport Included</span>
                </div>
              </div>
              
              <div className="bg-secondary/10 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Includes:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tech company visits (TCS, Infosys, etc.)</li>
                  <li>• Manufacturing plant tours</li>
                  <li>• Adventure activities</li>
                  <li>• Cultural experiences</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-2">Starting from ₹499/student</div>
                <Button variant="temple" className="w-full">
                  Book IV Tour
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
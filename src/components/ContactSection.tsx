import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to plan your perfect Tamil Nadu adventure? We're here to help!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">Fill out the form and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">College/Organization</label>
                    <Input placeholder="College or company name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Mobile Number *</label>
                    <Input placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Service Required *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="iv-tour">Industrial Visit Tour</SelectItem>
                        <SelectItem value="car-rental">Self-Drive Car Rental</SelectItem>
                        <SelectItem value="both">Both Services</SelectItem>
                        <SelectItem value="custom">Custom Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements - dates, number of people, destinations, etc."
                    rows={4}
                  />
                </div>
                
<<<<<<< HEAD
                <Button
                  variant="hero"
                  className="w-full text-lg py-6 relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
=======
                <Button variant="hero" className="w-full text-lg py-6">
                  Send Message
>>>>>>> 46adf5f99af0e71b306c2226cfb32d09f9703111
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our terms and privacy policy.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="hero" className="w-full justify-start gap-3">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Now
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Phone className="h-5 w-5" />
                  Call Us: +91 98765 43210
                </Button>
              </CardContent>
            </Card>
            
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Office Address</p>
                    <p className="text-sm text-muted-foreground">
                      123 Anna Salai, T. Nagar<br />
                      Chennai, Tamil Nadu 600017
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@triptamizh.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sun: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Interactive Map</p>
                    <p className="text-xs text-muted-foreground">Click to view location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
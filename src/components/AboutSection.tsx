import { Heart, Users, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Our <span className="text-primary">Journey</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Since 1989, TripTamizh has been Tamil Nadu's trusted travel companion, 
            connecting students with unforgettable experiences across our beautiful state. 
            Born from a passion for Tamil culture and adventure, we specialize in 
            budget-friendly, student-first travel solutions that showcase the best of South India.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Student-First</h3>
              <p className="text-muted-foreground">
                Every trip designed with student budgets and preferences in mind
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-temple rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">35+ Years Experience</h3>
              <p className="text-muted-foreground">
                Thousands of successful trips and countless happy memories created
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Tamil Nadu Roots</h3>
              <p className="text-muted-foreground">
                Deep cultural connection and local expertise across Tamil Nadu
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-muted rounded-2xl p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Students Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Safety Record</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
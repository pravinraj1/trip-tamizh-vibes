import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";

const DestinationsSection = () => {
  const destinations = [
    {
      name: "Ooty",
      description: "Queen of Hill Stations",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      price: "₹1,499"
    },
    {
      name: "Kodaikanal",
      description: "Princess of Hill Stations",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      price: "₹1,299"
    },
    {
      name: "Mahabalipuram",
      description: "Ancient Shore Temple City",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=400&q=80",
      rating: 4.6,
      price: "₹899"
    },
    {
      name: "Chennai",
      description: "Gateway to South India",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=400&q=80",
      rating: 4.5,
      price: "₹799"
    },
    {
      name: "Coimbatore",
      description: "Textile Capital",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&q=80",
      rating: 4.4,
      price: "₹999"
    },
    {
      name: "Pondicherry",
      description: "French Colonial Charm",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      price: "₹1,199"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Popular <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the most beautiful places in Tamil Nadu and beyond
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {destinations.map((destination, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-warm transition-all duration-300 border-2 hover:border-primary/20">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="text-sm text-white/90">{destination.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  {destination.rating}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Tamil Nadu</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Starting from</div>
                    <div className="text-lg font-bold text-primary">{destination.price}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-hero text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
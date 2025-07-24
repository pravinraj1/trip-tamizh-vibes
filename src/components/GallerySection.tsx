import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Camera, Users, MapPin } from "lucide-react";

const GallerySection = () => {
  // Placeholder gallery images - in a real app, these would come from Instagram API or local storage
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
      caption: "Ooty Hills Adventure",
      type: "landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=400&q=80",
      caption: "Temple Architecture Tour",
      type: "culture"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
      caption: "Students at Deer Park",
      type: "group"
    },
    {
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&q=80",
      caption: "Waterfall Trek",
      type: "adventure"
    },
    {
      src: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=400&q=80",
      caption: "Modern Architecture",
      type: "industrial"
    },
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
      caption: "Self Drive Experience",
      type: "travel"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Trip <span className="text-primary">Memories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments captured from our amazing trips across Tamil Nadu. Follow us on Instagram for daily updates!
          </p>
        </div>
        
        {/* Instagram-style grid */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-none hover:shadow-warm transition-all duration-300">
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={image.src} 
                      alt={image.caption}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">{image.caption}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {image.type === 'group' && <Users className="h-3 w-3" />}
                        {image.type === 'landscape' && <MapPin className="h-3 w-3" />}
                        {image.type === 'culture' && <Camera className="h-3 w-3" />}
                        {image.type === 'adventure' && <Camera className="h-3 w-3" />}
                        {image.type === 'industrial' && <Camera className="h-3 w-3" />}
                        {image.type === 'travel' && <MapPin className="h-3 w-3" />}
                        <span className="text-xs text-white/80">#TripTamizh</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Stats and Social CTA */}
        <div className="text-center">
          <div className="bg-gradient-temple rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold mb-2">10K+</div>
                <p className="text-white/90">Photos Shared</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5K+</div>
                <p className="text-white/90">Instagram Followers</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50K+</div>
                <p className="text-white/90">Happy Memories</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Follow Our Journey!</h3>
            <p className="mb-6 text-white/90">
              See daily updates, student adventures, and behind-the-scenes moments from our trips
            </p>
            
            <button className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-flex items-center gap-3">
              <Instagram className="h-5 w-5" />
              Follow @TripTamizh
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
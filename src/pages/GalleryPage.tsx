import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default GalleryPage;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar hideLogo={true} />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
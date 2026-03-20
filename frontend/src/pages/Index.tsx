import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturedShops from "@/components/FeaturedShops";
import SearchSection from "@/components/SearchSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CityDiscovery from "@/components/CityDiscovery";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <HowItWorks />
      <FeaturedShops />
      <SearchSection />
      <WhyChooseUs />
      <CityDiscovery />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;

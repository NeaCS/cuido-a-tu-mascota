
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

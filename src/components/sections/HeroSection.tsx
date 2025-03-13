
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Cuidado de</span>
              <span className="text-pet-green-medium">Mascotas</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-cursive mb-6">Paseo y cuidados para perros y gatos</h2>
            <p className="text-lg mb-8 text-gray-600">
              Ofrecemos servicios profesionales de paseo y cuidado para tus mascotas, brindándoles el amor y atención que merecen cuando no puedes estar con ellos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-pet-green-medium hover:bg-pet-green-dark">
                <a href="#services">Conoce nuestros servicios</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-pet-green-medium text-pet-green-medium hover:bg-pet-green-light hover:text-pet-green-dark">
                <a href="#contact">Contáctanos</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-pet-green-light rounded-full blur-3xl opacity-30 animate-float"></div>
              <img 
                src="/lovable-uploads/cb02ee46-fad9-490d-9c62-e19917369240.png" 
                alt="Cuidado de Mascotas" 
                className="relative z-10 w-full max-w-md animate-float" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

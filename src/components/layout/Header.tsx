
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#services' },
    { label: 'Galería', href: '#gallery' },
    { label: 'Testimonios', href: '#testimonials' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-sm z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-2">
          <img src="/lovable-uploads/cb02ee46-fad9-490d-9c62-e19917369240.png" alt="Cuidado de Mascotas" className="h-16 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-pet-green-medium transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="bg-pet-green-medium hover:bg-pet-green-dark text-white">
            <a href="https://wa.me/1234567890?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20los%20servicios%20de%20paseo%20para%20mascotas">
              Contactar
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 pt-20 transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center gap-6 p-4">
          {menuItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-pet-green-medium transition-colors font-medium text-lg py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="bg-pet-green-medium hover:bg-pet-green-dark text-white w-full mt-4">
            <a href="https://wa.me/1234567890?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20los%20servicios%20de%20paseo%20para%20mascotas">
              Contactar
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

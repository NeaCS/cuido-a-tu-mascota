
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pet-green-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/lovable-uploads/cb02ee46-fad9-490d-9c62-e19917369240.png" alt="Cuidado de Mascotas" className="h-24 w-auto mb-4 bg-white p-1 rounded" />
            <p className="text-sm opacity-80 mt-4">
              Brindamos el mejor cuidado y paseo para tus mascotas con amor y responsabilidad.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="opacity-80 hover:opacity-100 transition-opacity">Inicio</a></li>
              <li><a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">Servicios</a></li>
              <li><a href="#gallery" className="opacity-80 hover:opacity-100 transition-opacity">Galería</a></li>
              <li><a href="#testimonials" className="opacity-80 hover:opacity-100 transition-opacity">Testimonios</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@cuidadomascotas.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={18} />
                <a href="https://instagram.com/cuido.a.tu.mascota_hijo" className="underline hover:no-underline">@cuido.a.tu.mascota_hijo</a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs opacity-70">
                © {new Date().getFullYear()} Cuidado de Mascotas. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

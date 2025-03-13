
import { Dog, Cat, Heart, Home, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Dog size={40} className="text-pet-green-medium" />,
      title: "Paseo de Perros",
      description: "Paseos diarios personalizados según las necesidades de tu perro, con rutas variadas y estimulantes."
    },
    {
      icon: <Cat size={40} className="text-pet-green-medium" />,
      title: "Visitas a Gatos",
      description: "Visitas a domicilio para alimentar, jugar y dar compañía a tu gato mientras estás fuera."
    },
    {
      icon: <Home size={40} className="text-pet-green-medium" />,
      title: "Cuidado en Casa",
      description: "Cuidamos de tu mascota en tu hogar, manteniendo su rutina y entorno familiar."
    },
    {
      icon: <Heart size={40} className="text-pet-green-medium" />,
      title: "Cuidados Especiales",
      description: "Atención personalizada para mascotas con necesidades especiales o medicación."
    },
    {
      icon: <Clock size={40} className="text-pet-green-medium" />,
      title: "Horarios Flexibles",
      description: "Disponibilidad en diferentes horarios para adaptarnos a tus necesidades."
    },
    {
      icon: <Shield size={40} className="text-pet-green-medium" />,
      title: "Servicio Confiable",
      description: "Personal responsable y amante de los animales, con experiencia y referencias comprobables."
    }
  ];

  return (
    <section id="services" className="py-16 bg-pet-green-light bg-opacity-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una variedad de servicios diseñados para satisfacer las necesidades de tu mascota mientras te brindamos tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-pet-green-light hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

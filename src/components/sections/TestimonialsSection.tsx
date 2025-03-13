
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marina Sánchez",
      role: "Dueña de Max",
      quote: "El servicio es excepcional. Mi perro Max siempre está feliz cuando ve llegar a su paseador. Lo recomiendo totalmente.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "Carlos Moreno",
      role: "Dueño de Luna",
      quote: "Mi gata Luna es muy tímida, pero con el cuidado y paciencia que le brindan, ahora espera con ansias las visitas.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      name: "Laura Martínez",
      role: "Dueña de Rocky",
      quote: "La tranquilidad que me da saber que Rocky está en buenas manos cuando viajo no tiene precio. Servicio 10/10.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-pet-green-light bg-opacity-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestros clientes y sus mascotas son nuestra mejor referencia. Esto es lo que dicen sobre nuestros servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-pet-green-light overflow-hidden">
              <CardHeader className="pb-2 flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-pet-green-medium" 
                />
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

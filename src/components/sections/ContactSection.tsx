
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En una implementación real, aquí se procesaría el formulario
    console.log("Formulario enviado");
    // Mostrar algún tipo de notificación de éxito
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros servicios? ¡Estamos aquí para ayudarte!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Envianos un mensaje</h3>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                      <Input id="name" placeholder="Tu nombre" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Asunto</label>
                    <Input id="subject" placeholder="Asunto del mensaje" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                    <Textarea 
                      id="message" 
                      placeholder="¿Cómo podemos ayudarte?" 
                      rows={5} 
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-pet-green-medium hover:bg-pet-green-dark">
                    <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-pet-green-light p-3 rounded-full">
                  <Phone className="h-6 w-6 text-pet-green-dark" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Teléfono</h4>
                  <p className="text-gray-600">+1 234 567 890</p>
                  <p className="text-gray-600 text-sm mt-1">Disponible de Lunes a Viernes, 8am - 8pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pet-green-light p-3 rounded-full">
                  <Mail className="h-6 w-6 text-pet-green-dark" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-gray-600">info@cuidadomascotas.com</p>
                  <p className="text-gray-600 text-sm mt-1">Respuestas en 24 horas o menos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pet-green-light p-3 rounded-full">
                  <Instagram className="h-6 w-6 text-pet-green-dark" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Instagram</h4>
                  <a 
                    href="https://instagram.com/cuido.a.tu.mascota_hijo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pet-green-medium hover:underline"
                  >
                    @cuido.a.tu.mascota_hijo
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Síguenos para ver fotos diarias de nuestros amigos peludos</p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <a 
                    href="https://wa.me/1234567890?text=Hola%2C%20me%20interesa%20saber%20más%20sobre%20los%20servicios%20de%20paseo%20para%20mascotas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

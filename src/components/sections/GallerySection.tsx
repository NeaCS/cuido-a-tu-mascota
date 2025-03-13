
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const GallerySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Imágenes de ejemplo (en producción se reemplazarían con imágenes reales)
  const galleryImages = [
    'https://images.unsplash.com/photo-1583511655826-05700442399b?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?q=80&w=1000&auto=format&fit=crop',
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galería de Mascotas Felices</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mira a algunas de las mascotas que hemos tenido el placer de cuidar y pasear.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
              onClick={() => openModal(image)}
            >
              <img 
                src={image} 
                alt={`Mascota feliz ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-pet-green-dark bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver imagen
                </span>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
            <img 
              src={selectedImage} 
              alt="Imagen de mascota ampliada" 
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain" 
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;

import React from 'react';

// Arreglo de imágenes con rutas relativas a la carpeta public
const images = [
  { src: "/assets/almojabana_2024-320x202.jpeg", alt: "Almojabana" },
  { src: "/assets/bunuelos_2024_-320x202.jpeg", alt: "Bunuelos" },
  { src: "/assets/croissant_2024_-320x202.jpeg", alt: "Croissant" },
  { src: "/assets/empanada_cambray_2024-320x202.jpeg", alt: "Empanada Cambray" },
  { src: "/assets/hawaiano_2024-320x202.jpeg", alt: "Hawaiano" },
  { src: "/assets/pandebono_2024-320x202.jpeg", alt: "Pandebono" },
  { src: "/assets/arepa_calarquena_2024-scaled.jpeg", alt: "Arepa" },
  { src: "/assets/churros_2024-scaled.jpeg", alt: "Churros" },
  { src: "/assets/dedodequesodulce_2024-scaled.jpeg", alt: "Dedo de queso" },
  { src: "/assets/pan_salchicha_2024-scaled.jpeg", alt: "Pan salchicha" },
  { src: "/assets/pastelGloria_2024-scaled.jpeg", alt: "Pastel Gloria" },
  { src: "/assets/rollos_2024-scaled.jpeg", alt: "Rollos" },
];

// Mezclar las imágenes aleatoriamente
const shuffledImages = [...images].sort(() => Math.random() - 0.5);

const ImageGallery = () => {
  return (
    <div className="ml-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {shuffledImages.slice(0, 12).map((image, index) => (
        <div key={index} className="relative group">
          <img
            className="w-56 h-40 xl:w-52 xl:h-32 object-cover rounded-lg shadow group-hover:blur-[1px] duration-300"
            src={image.src}
            alt={image.alt}
          />
          <span className="group-hover:absolute hidden group-hover:block top-1/2 right-1/2 text-center transform translate-x-1/2 -translate-y-1/2 text-lg capitalize font-bold bg-white bg-opacity-50 p-1 rounded-lg transition-all">
            {image.alt}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

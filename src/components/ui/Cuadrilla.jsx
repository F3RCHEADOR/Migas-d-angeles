import React from "react";

// Arreglo de imágenes con rutas relativas a la carpeta public
const images = [
  {
    src: "/assets/almojabana_2024-320x202.jpeg",
    alt: "Almojabana",
    tipo: "pan",
  },
  { src: "/assets/bunuelos_2024_-320x202.jpeg", alt: "Bunuelos", tipo: "pan" },
  {
    src: "/assets/croissant_2024_-320x202.jpeg",
    alt: "Croissant",
    tipo: "pan",
  },
  {
    src: "/assets/empanada_cambray_2024-320x202.jpeg",
    alt: "Empanada Cambray",
    tipo: "pan",
  },
  { src: "/assets/hawaiano_2024-320x202.jpeg", alt: "Hawaiano", tipo: "pan" },
  { src: "/assets/pandebono_2024-320x202.jpeg", alt: "Pandebono", tipo: "pan" },
  {
    src: "/assets/arepa_calarquena_2024-scaled.jpeg",
    alt: "Arepa",
    tipo: "pan",
  },
  { src: "/assets/churros_2024-scaled.jpeg", alt: "Churros", tipo: "pan" },
  {
    src: "/assets/dedodequesodulce_2024-scaled.jpeg",
    alt: "Dedo de queso",
    tipo: "pan",
  },
  {
    src: "/assets/pan_salchicha_2024-scaled.jpeg",
    alt: "Pan salchicha",
    tipo: "pan",
  },
  {
    src: "/assets/pastelGloria_2024-scaled.jpeg",
    alt: "Pastel Gloria",
    tipo: "pan",
  },
  { src: "/assets/rollos_2024-scaled.jpeg", alt: "Rollos", tipo: "pan" },
  {
    src: "/assets/Aborrajados-460x295.jpg",
    alt: "Aborrajados",
    tipo: "cafeteria",
  },
  {
    src: "/assets/ArepaRellena-460x295.jpg",
    alt: "ArepaRellena",
    tipo: "cafeteria",
  },
  {
    src: "/assets/Empanadas_-460x295.jpg",
    alt: "Empanadas",
    tipo: "cafeteria",
  },
  {
    src: "/assets/Papa_Rellena-460x295.jpg",
    alt: "PapaRellena",
    tipo: "cafeteria",
  },
  {
    src: "/assets/PastelDePollo-460x295.jpg",
    alt: "PastelDePollo",
    tipo: "cafeteria",
  },
  {
    src: "/assets/PataconConCarne-460x295.jpg",
    alt: "PataconConCarne",
    tipo: "cafeteria",
  },
  {
    src: "/assets/2-460x295.jpg",
    alt: "Pastel",
    tipo: "pasteleria",
  },
  {
    src: "/assets/5-460x295.jpg",
    alt: "PataconConCarne",
    tipo: "pasteleria",
  },
  {
    src: "/assets/detalles-ambiente_026-460x295.jpg",
    alt: "PataconConCarne",
    tipo: "pasteleria",
  },
  {
    src: "/assets/detalles-ambiente_028-460x295.jpg",
    alt: "PataconConCarne",
    tipo: "pasteleria",
  },
  {
    src: "/assets/detalles-ambiente_029-460x295.jpg",
    alt: "PataconConCarne",
    tipo: "pasteleria",
  },
  {
    src: "/assets/detalles-ambiente_030-460x295.jpg",
    alt: "PataconConCarne",
    tipo: "pasteleria",
  },
  {
    src: "/assets/torta-.jpg",
    alt: "torta",
    tipo: "tortas",
  },
  {
    src: "/assets/torta-1.jpg",
    alt: "torta1",
    tipo: "tortas",
  },
  {
    src: "/assets/torta-2.jpg",
    alt: "torta2",
    tipo: "tortas",
  },
  {
    src: "/assets/torta-3.jpg",
    alt: "torta4",
    tipo: "tortas",
  },
  {
    src: "/assets/torta-4.jpg",
    alt: "torta5",
    tipo: "tortas",
  },
  {
    src: "/assets/torta-5.jpg",
    alt: "torta6",
    tipo: "tortas",
  },
  {
    src: "/assets/tipica (1).jpg",
    alt: "tipica-1",
    tipo: "tipica",
  },
  {
    src: "/assets/tipica (2).jpg",
    alt: "tipica-2",
    tipo: "tipica",
  },
  {
    src: "/assets/tipica (3).jpg",
    alt: "tipica-3",
    tipo: "tipica",
  },
  {
    src: "/assets/tipica (4).jpg",
    alt: "tipica-4",
    tipo: "tipica",
  },
  {
    src: "/assets/tipica (5).jpg",
    alt: "tipica-5",
    tipo: "tipica",
  },
  {
    src: "/assets/tipica (6).jpg",
    alt: "tipica-6",
    tipo: "tipica",
  },
  {
    src: "/assets/tipica (7).jpg",
    alt: "tipica-7",
    tipo: "tipica",
  },
  {
    src: "/assets/tipica (8).jpg",
    alt: "tipica-8",
    tipo: "tipica",
  },
  {
    src: "/assets/tipica (9).jpg",
    alt: "tipica-9",
    tipo: "tipica",
  },
];

/// Mezclar las imágenes aleatoriamente
const shuffledImages = [...images].sort(() => Math.random() - 0.5);

const ImageGallery = ({ tipo }) => {
  let filteredImages = [];

  // Usamos el switch para filtrar imágenes según el tipo recibido
  switch (tipo) {
    case "pan":
      // Filtramos las imágenes que son de tipo "pan"
      filteredImages = shuffledImages.filter((image) => image.tipo === "pan");
      break;
    case "cafeteria":
      // Filtramos las imágenes que son de tipo "cafeteria"
      filteredImages = shuffledImages.filter(
        (image) => image.tipo === "cafeteria"
      );
      break;
    case "pasteleria":
      // Filtramos las imágenes que son de tipo "cafeteria"
      filteredImages = shuffledImages.filter(
        (image) => image.tipo === "pasteleria"
      );
      break;
    case "tortas":
      // Filtramos las imágenes que son de tipo "cafeteria"
      filteredImages = shuffledImages.filter(
        (image) => image.tipo === "tortas"
      );
      break;
      case "tipica":
        // Filtramos las imágenes que son de tipo "cafeteria"
        filteredImages = shuffledImages.filter(
          (image) => image.tipo === "tipica"
        );
        break;
    default:
      break;
  }

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 ${tipo === "pan" ? "lg:grid-cols-4" : "lg:grid-cols-3"} mx-auto gap-y-4 md:gap-y-8 gap-x-4 md:p-4`}
    >
      {filteredImages.map((image, index) => (
        <div key={index} className="relative group">
          <img
            className={`${tipo === "pan" ? "w-80 h-56 lg:w-56 lg:h-40" : "w-80 h-56 xl:w-72 xl:h-52"} mx-auto object-cover rounded-lg shadow group-hover:blur-[1px] duration-300`}
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

import { useState, useEffect } from 'react';

const bgImages = [
    {
        src: "/assets/eventos-1024x768.jpg",
        alt: "bg-eventos-1",
    },
    {
        src: "/assets/eventos2-700x934.jpg",
        alt: "bg-eventos-2",
    },
];

const SliderEventoImagen = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true); // Estado para controlar el desvanecimiento

    useEffect(() => {
        const interval = setInterval(() => {
            // Activar el desvanecimiento
            setFade(false); 
            setTimeout(() => {
                // Después de que se haya desvanecido, cambia la imagen
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
                setFade(true); // Activar nuevamente el desvanecimiento
            }, 500); // Espera medio segundo antes de cambiar la imagen
        }, 6000); // Cambiar la imagen cada 6 segundos

        // Limpiar el intervalo cuando el componente se desmonte
        return () => {
            clearInterval(interval);
        };
    }, []); // Se pasa un array vacío para ejecutar el efecto una sola vez al montar el componente

    return (
        <div className="relative w-4/5 h-[80dvh] mx-auto">
            <img
                src={bgImages[currentImageIndex].src}
                alt={bgImages[currentImageIndex].alt}
                className={`w-full h-full shadow-lg  rounded-md object-cover absolute transition-opacity duration-1000 ${
                    fade ? 'opacity-100' : 'opacity-0'
                }`}
            />
        </div>
    );
};

export default SliderEventoImagen;

import { useState, useEffect } from "react";

const images = [
  { url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Lago_Ranco.jpg', description: 'Mirador Piedra Meza, Lago Ranco, Chile' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Arco_de_medicina_Udec.JPG', description: 'Arco de la Universidad de Concepción, Concepción, Chile' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Playa_Ramuntcho.JPG', description: 'Playa de Ramuntcho, Hualpén, Chile' },
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 250);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-1/3 border-l-2 border-black">
      <div
        className={`h-full w-full bg-cover bg-center transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${images[currentIndex].url})`,
          backgroundColor: '#4A90E2',
          backgroundBlendMode: 'multiply', // Aplicar el color sobre la imagen
          filter: 'brightness(150%)',
        }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-4 text-center">
        <p>{images[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default CustomCarousel;

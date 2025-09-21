import { useState, useRef, TouchEvent, MouseEvent } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface Producto {
  id: number;
  nombre: string;
  ubicacion: string;
  imagenes: string[];
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: 'Nike',
    ubicacion: 'Valencia',
    imagenes: [
      '/image/descarga.jpeg',
      '/image/2.jpeg'
    ],
  },
  {
    id: 2,
    nombre: 'Adidas',
    ubicacion: 'Madrid',
    imagenes: [
      '/image/adidas1.jpeg',
      '/image/adidas2.jpeg',
    ],
  },
];

export default function ProductoDeslizante(): React.ReactElement {
  const [index, setIndex] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const startX = useRef<number>(0);
    const [imagenActual, setImagenActual] = useState<number>(0);

  const siguiente = () => {
    setImagenActual((prev) => (prev + 1) % producto.imagenes.length);
  };

  const anterior = () => {
    setImagenActual((prev) =>
      prev === 0 ? producto.imagenes.length - 1 : prev - 1
    );
  };


  // Touch events
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
    setIsSwiping(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
      let deltaX = currentX - startX.current;

  // Limita el desplazamiento
  if (deltaX > 150) deltaX = 150;
  if (deltaX < -150) deltaX = -150;

  setOffsetX(deltaX);

    setOffsetX(currentX - startX.current);
  };

  const handleTouchEnd = () => {
    finalizeSwipe();
  };

  // Mouse events
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
    setIsSwiping(true);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isSwiping) return;
    const currentX = e.clientX;
          let deltaX = currentX - startX.current;

  // Limita el desplazamiento
  if (deltaX > 250) deltaX = 250;
  if (deltaX < -250) deltaX = -250;
    setOffsetX(deltaX);
  };

  const handleMouseUp = () => {
    finalizeSwipe();
  };

  const finalizeSwipe = () => {
    const umbral = 100;
    setIsSwiping(false);

    if (offsetX > umbral || offsetX < -umbral) {
      setIndex((prev) => (prev + 1) % productos.length);
    }

    setOffsetX(0);
  };

  const producto = productos[index];
 const fondo =
    offsetX > 100
      ? '#bbf7d0' // verde claro
      : offsetX < -100
      ? '#fecaca' // rojo claro
      : '#ffffff'; // blanco

  return (
    <div className="flex justify-center items-center bg-gray-100 overflow-hidden"
    style={{ height: 'calc(100vh - 120px)' }}>
      <div
        className={'rounded-lg shadow-lg p-6 mb-auto mt-auto transition-transform duration-300 ease-out select-none w-auto h-5/6 overflow-auto'}
        style={{
          transform: `translateX(${offsetX}px)`,
          backgroundColor: fondo,
          cursor: isSwiping ? 'grabbing' : 'grab',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Carrusel de imágenes */}
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide relative">
            <Image
        src={producto.imagenes[imagenActual]}
          alt={`Imagen ${imagenActual + 1}`}
          width={500}
          height={200}

            />
        {/* Flecha izquierda */}
        <button
          onClick={anterior}
          className="absolute left-0.5 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        {/* Flecha derecha */}
        <button
          onClick={siguiente}
          className="absolute right-4.5 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

      </div>
<div className="flex space-x-2 mt-4">
        {producto.imagenes.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === imagenActual ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

        <h2 className="text-xl font-semibold">{producto.nombre}</h2>
        <p className="text-gray-600 mb-4">{producto.ubicacion}</p>
        <p className="text-gray-500 text-sm">Desliza para ver más productos</p>
      </div>
    </div>
  );
}
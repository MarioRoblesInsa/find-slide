import Link from 'next/link';
import { Dropdown } from '../dropdown/dropdown';
import { useState } from 'react';
import { CategoriesInterface } from './categories.interface';
export const CategoriesNav = () => {
    const categories: CategoriesInterface[] = [
        {id: 1, name: 'Coches', tag: 'coches-de-segunda-mano', sub_category: undefined},
        {id: 2, name: 'Libros', tag: 'libros-comics-literatura', sub_category: [{id:34, name:'Mangas', tag: 'mangas'}, {id:35, name:'Cómics', tag: 'comics'}, {id:36, name:'Libros de texto', tag: 'libros-texto'}, {id:37, name:'Novelas', tag: 'novelas'}, {id:38, name:'Libros infantiles y juveniles', tag: 'libros-infantiles-juveniles'}, {id:39, name:'Otros libros', tag: 'otros-libros'}]},
        {id: 3, name: 'Moda y accesorios', tag: 'moda-accesorios', sub_category: undefined},
        {id: 4, name: 'Móviles y tablets', tag: 'moviles-tablets', sub_category: undefined},
        {id: 5, name: 'Electrónica', tag: 'electronica', sub_category: undefined},
        {id: 6, name: 'Deportes', tag: 'deportes', sub_category: undefined},
        {id: 7, name: 'Videojuegos', tag: 'videojuegos', sub_category: undefined},
        {id: 8, name: 'Joyería', tag: 'joyeria', sub_category: undefined},
        {id: 9, name: 'Música', tag: 'musica', sub_category: undefined},
        {id: 10, name: 'Películas y Series', tag: 'peliculas-series', sub_category: undefined},
        {id: 11, name: 'Hogar y Jardín', tag: 'hogar-jardin', sub_category: undefined},
        {id: 12, name: 'Informática', tag: 'informatica', sub_category: undefined},
        {id: 13, name: 'Cine y TV', tag: 'cine-tv', sub_category: undefined},
        {id: 14, name: 'Niños y bebés', tag: 'ninos-bebes', sub_category: undefined},
        {id: 15, name: 'Consolas', tag: 'consolas', sub_category: undefined},
        {id: 16, name: 'Cámaras y Accesorios', tag: 'camaras-accesorios', sub_category: undefined},
        {id: 17, name: 'Relojes', tag: 'relojes', sub_category: undefined},
        {id: 18, name: 'Instrumentos musicales', tag: 'instrumentos-musicales', sub_category: undefined},
        {id: 19, name: 'Antigüedades y Coleccionismo', tag: 'antiguedades-coleccionismo', sub_category: undefined},
        {id: 20, name: 'Otros', tag: 'otros', sub_category: undefined},
        {id: 21, name: 'Inmobiliaria', tag: 'inmobiliaria', sub_category: undefined},
        {id: 22, name: 'Empleo', tag: 'empleo', sub_category: undefined},
        {id: 23, name: 'Servicios', tag: 'servicios', sub_category: undefined},
        {id: 24, name: 'Mascotas', tag: 'mascotas', sub_category: undefined},
        {id: 25, name: 'Motor', tag: 'motor', sub_category: undefined},
        {id: 26, name: 'Electrodomésticos', tag: 'electrodomesticos', sub_category: undefined},
        {id: 27, name: 'Belleza y Salud', tag: 'belleza-salud', sub_category: undefined},
        {id: 28, name: 'Jardinería', tag: 'jardineria', sub_category: undefined},
        {id: 29, name: 'Herramientas', tag: 'herramientas', sub_category: undefined},
        {id: 30, name: 'Arte y Artesanía', tag: 'arte-artesania', sub_category: undefined},
        {id: 31, name: 'Viajes', tag: 'viajes', sub_category: undefined},
        {id: 32, name: 'Alimentación', tag: 'alimentacion', sub_category: undefined},
        {id: 33, name: 'Eventos', tag: 'eventos', sub_category: undefined},

    ];

    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);


    return (
    <>
    <nav className="bg-white flex flex-col ml-3.5">
        <div className="flex items-center w-full">
        <ul className="flex flex-col md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0">
        <li className="relative inline-block md:bg-transparent md:p-0 text-red-500 bg-transparent before:bg-red-500 hover:rounded-t-none before:absolute before:-top-0 before:-left-0  before:flex before:h-[2px] before:w-full before:origin-top-right before:scale-x-0 before:transition before:duration-400 before:ease-in-out hover:before:origin-top-left hover:before:scale-x-100">
          <button
          onClick={() => { setOpen(!open); setSelectedCategory(null); }}
            className={`text-red-500 ${!open ? 'hover:border-t-2' : ''}`}
          >
            Todas las categorías
          </button>
            <Dropdown open={open} categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </li>
        {categories.slice(0, 10).map(({tag, name, id, sub_category}) => (
        <li key={id} className="overflow-hidden"
        onClick={() => {setSelectedCategory(id); setOpen(!open);}}>
          <Link key={id} href={sub_category ? '': tag} className={'relative flex md:bg-transparent md:p-0 text-red-500 bg-transparent before:bg-red-500 hover:rounded-t-none before:absolute before:-top-0 before:-left-0  before:flex before:h-[2px] before:w-full before:origin-top-right before:scale-x-0 before:transition before:duration-400 before:ease-in-out hover:before:origin-top-left hover:before:scale-x-100'} aria-current="page">{name}</Link>
        </li>
        ))}
        </ul>
        </div>
    </nav>
    </>
    );
};
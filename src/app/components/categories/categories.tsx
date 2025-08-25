import Link from "next/link";
import Dropdown from "../dropdown/dropdown";
import { useState } from "react";
import { CategoriesInterface } from "./categories.interface";
export default function CategoriesNav() {
    const categories: CategoriesInterface[] = [
        {id: 1, name: 'Coches', tag: 'coches-de-segunda-mano'},
        {id: 2, name: 'Libros', tag: 'libros-comics-literatura', sub_category: [{id:34, name:'Mangas', tag: 'mangas'}]},
        {id: 3, name: 'Moda y accesorios', tag: 'moda-accesorios'}
    ];

    const [open, setOpen] = useState(false);

    return (
    <>
    <nav className="bg-white flex flex-col ml-3.5">
        <div className="flex items-center w-full">
        <ul className="flex flex-col md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0">
        <li className="relative inline-block md:bg-transparent md:p-0 text-red-500 bg-transparent before:bg-red-500 hover:rounded-t-none before:absolute before:-top-0 before:-left-0  before:flex before:h-[2px] before:w-full before:origin-top-right before:scale-x-0 before:transition before:duration-400 before:ease-in-out hover:before:origin-top-left hover:before:scale-x-100">
          <button
          onClick={() => setOpen(!open)}
            className={`text-red-500 ${!open ? 'hover:border-t-2' : ''}`}
          >
            Todas las categorías
          </button>
            <Dropdown open={open} categories={categories}/>
        </li>
        {categories.map(({tag, name, id}) => (
        <li key={id} className="">
          <Link key={id} href={tag} className={`relative flex md:bg-transparent md:p-0 text-red-500 bg-transparent before:bg-red-500 hover:rounded-t-none before:absolute before:-top-0 before:-left-0  before:flex before:h-[2px] before:w-full before:origin-top-right before:scale-x-0 before:transition before:duration-400 before:ease-in-out hover:before:origin-top-left hover:before:scale-x-100`} aria-current="page">{name}</Link>
        </li>
        ))}
        </ul>
        </div>
    </nav>
    </>
    );
}
import Link from "next/link";
import { useState } from "react";
export default function Dropdown() {
        const categories = [
        {id: 1, name: 'Coches', tag: 'coches-de-segunda-mano'},
        {id: 2, name: 'Libros', tag: 'libros-comics-literatura'},
        {id: 3, name: 'Moda y accesorios', tag: 'moda-accesorios'}
    ]
      const [open, setOpen] = useState(false);

    return (
        <>
        <div className="">
      <ul className="flex space-x-6">
        <li className="relative">
          <button
          onClick={() => setOpen(!open)}
            className="text-gray-700 hover:text-blue-600"
          >
            Categorías
          </button>
        {open && categories.map(({tag, name, id}) => (
        <li key={id} className="">
          <Link key={id} href={tag} className={`flex md:bg-transparent md:p-0 bg-transparen border-t-2 border-transparent text-red-500 hover:border-t-2 hover:border-red-500 transition bg-transparent`} aria-current="page">{name}</Link>
        </li>
        ))}
        </li>
      </ul>
        </div>
        </>
    );
}
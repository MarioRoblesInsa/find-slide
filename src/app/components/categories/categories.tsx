import Link from "next/link";
import Dropdown from "../dropdown/dropdown";
import motion from "motion/react";
export default function Categories() {
    const categories = [
        {id: 1, name: 'Coches', tag: 'coches-de-segunda-mano'},
        {id: 2, name: 'Libros', tag: 'libros-comics-literatura'},
        {id: 3, name: 'Moda y accesorios', tag: 'moda-accesorios'}
    ]
    return (
    <>
    <nav className="bg-white flex flex-col ml-3.5">
        {/* Aquí hacer dropdown */}
        <div className="flex items-center w-full">
        <ul className="flex flex-col md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0">
        <Dropdown></Dropdown>
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
import Link from "next/link";
import Dropdown from "../dropdown/dropdown";

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
        <Dropdown></Dropdown>
        <div className="flex items-center w-full py-2.5">
        <ul className="flex flex-col md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        {categories.map(({tag, name, id}) => (
        <li key={id} className="">
          <Link key={id} href={tag} className={`flex md:bg-transparent md:p-0 bg-transparen border-t-2 border-transparent text-red-500 hover:border-t-2 hover:border-red-500 transition bg-transparent`} aria-current="page">{name}</Link>
        </li>
        ))}
        </ul>
        </div>
    </nav>
    </>
    );
}
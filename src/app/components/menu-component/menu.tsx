'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Searcher from "../searcher/searcher";
export default function Menu() {
    const pathName = usePathname();
    const links = [
      {href: "/inicio", label: "Inicio"},
      {href: "/perfil", label: "Perfil"}
    ];
    return (
        <>
  <nav className="border-gray-200 bg-orange-400  mx-auto p-4 flex flex-col md:flex-row items-center gap-4 w-full md:w-full">
    <div className="flex items-center gap-2 w-full">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image width={50}src="/vercel.svg" height={50} alt="vercel logo" ></Image>

        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vinder</span>
    </a>
    <Searcher></Searcher>
    </div>
      
    <div className="hidden md:block md:w-auto items-center gap-4" id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-orange-400">
        {links.map(({href, label}) => (
        <li key={label}>
          <Link key={label} href={href} className={`block py-2 px-3 rounded-sm md:bg-transparent md:p-0 bg-transparent hover:text-orange-700 md:hover:text-orange-700 ${pathName.includes(href) ? 'text-orange-700 md:text-orange-700' : 'text-white md:text-white'}`} aria-current="page">{label}</Link>
        </li>
        ))}

      </ul>
    </div>
  </nav>
 
        </>
    );
}
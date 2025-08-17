'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Menu() {
    const pathName = usePathname();
    const links = [
      {href: "/inicio", label: "Inicio"},
      {href: "perfil", label: "Perfil"}
    ];
    return (
        <>
<nav className="border-gray-200 bg-orange-400">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FindSlide</span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-orange-400">
        {links.map(({href, label}) => (
        <li>
          <Link key={label} href={href} className={`block py-2 px-3 rounded-sm md:bg-transparent md:p-0 bg-transparent hover:text-orange-700 md:hover:text-orange-700 ${pathName.includes(href) ? 'text-orange-700 md:text-orange-700' : 'text-white md:text-white'}`} aria-current="page">{label}</Link>
        </li>
        ))}

      </ul>
    </div>
  </div>
</nav>
 
        </>
    );
}
'use client';
import Image from 'next/image';
import {Searcher} from '../searcher/searcher';
import {CategoriesNav} from '../categories/categories';

export const Menu = () => {
    return (
        <>
  <nav className="hidden lg:border-gray-200 lg:bg-transparent  lg:mx-auto lg:p-4 lg:flex lg:flex-row lg:items-center lg:gap-4 lg:w-full">
    <div className="lg:flex lg:items-center lg:gap-2 lg:w-full">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image className="bg-red-500" width={50}src="/vercel.svg" height={50} alt="vercel logo" ></Image>
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-500">adssada</span>
    </a>
    <Searcher></Searcher>
    </div>
    {/* Botones de iniciar sesión, registrarse */}
    <div className="flex space-x-4">
    <button className="flex-1 rounded-full bg-red-400 text-center px-4 py-2 whitespace-nowrap border-2 border-red-400 hover:bg-transparent hover:text-red-400 transition hover:cursor-pointer active:scale-95"
      type="button">Iniciar Sesión</button>
    <button className="flex-1 rounded-full bg-red-400 text-center px-4 py-2 border-2 border-red-400 hover:bg-transparent hover:text-red-400 transition hover:cursor-pointer active:scale-95"
      type="button">Registrate</button>
    </div>
  </nav>
  <CategoriesNav></CategoriesNav>
 
</>
    );
};
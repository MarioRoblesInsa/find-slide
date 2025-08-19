'use client'
import Image from "next/image";
import Searcher from "../searcher/searcher";
import Categories from "../categories/categories";
export default function Menu() {
    return (
        <>
  <nav className="border-gray-200 bg-transparent  mx-auto p-4 flex flex-col md:flex-row items-center gap-4 w-full md:w-full">
    <div className="flex items-center gap-2 w-full">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image className="bg-red-500" width={50}src="/vercel.svg" height={50} alt="vercel logo" ></Image>
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-500">adssada</span>
    </a>
    <Searcher></Searcher>
    </div>
    {/* Botones de iniciar sesión, registrarse */}
    <div className="flex space-x-4">
    <button className="flex-1 rounded-full bg-red-400 text-center px-4 py-2 whitespace-nowrap border-2 border-red-400 hover:bg-transparent hover:text-red-400 transition hover:cursor-pointer"
      type="button">Iniciar Sesión</button>
    <button className="flex-1 rounded-full bg-red-400 text-center px-4 py-2 border-2 border-red-400 hover:bg-transparent hover:text-red-400 transition hover:cursor-pointer"
      type="button">Registrate</button>
    </div>
  </nav>
  <Categories></Categories>
 
        </>
    );
}
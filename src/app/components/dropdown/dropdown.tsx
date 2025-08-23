import Link from "next/link";
import { useState } from "react";
type DropdownProps = {
  open: boolean;
};

export default function Dropdown({open}: DropdownProps) {
    const categories = [
        {id: 1, name: 'Coches', tag: 'coches-de-segunda-mano'},
        {id: 2, name: 'Libros', tag: 'libros-comics-literatura', sub_category: [{id:34, name:'Mangas', tag: 'mangas'}]},
        {id: 3, name: 'Moda y accesossssssssssssssssssssssrios', tag: 'moda-accesorios'}
    ];

    const [selectedCategory, setSelectCategory] = useState<number |null>(null);

    const showInfoSubCategory = (id: number) => {
      setSelectCategory(prev => (prev === id ? null : id))
    }
    return (
      <>
      <ul className="absolute gap-6">
      <ul className={`flex flex-col mt-1.5 space-y-2 bg-red-100 rounded  ${open ? 'animate-slide-in-top' : ''} transition-all`}>
        {open && categories.map(({tag, name, id, sub_category}) => {
          return (
          <li key={id} className="animate-fade-in-down delay-75 w-auto"
          onClick={sub_category ? () => showInfoSubCategory(id) : undefined}>
          <Link key={id} href={sub_category ? '': tag} className={`flex md:bg-transparent md:p-0 bg-transparen border-l-2 border-transparent text-red-500 hover:border-l-2 hover:border-red-500 transition bg-transparent`} aria-current="page">{name}</Link>
          </li>
          )
        })} 
      </ul>
    {selectedCategory && open && (
      categories.find(cat => cat.id === selectedCategory)?.sub_category && (
      <ul className="relative space-y-2 bg-red rounded p-2 shadow left-full ">
      {categories
        .find(cat => cat.id === selectedCategory)
        ?.sub_category?.map(({ id, name, tag }) => (
          <li key={id}>
            <Link href={tag} className="text-red-500 hover:underline">
              {name}
            </Link>
          </li>
        ))}
    </ul>)

  )}
      </ul>
        </>
    );
}
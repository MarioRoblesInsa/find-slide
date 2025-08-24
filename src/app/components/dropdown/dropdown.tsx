import Link from "next/link";
import { useState } from "react";
type DropdownProps = {
  open: boolean;
};

export default function Dropdown({open}: DropdownProps) {
    const categories = [
        {id: 1, name: 'Coches', tag: 'coches-de-segunda-mano'},
        {id: 2, name: 'Libros', tag: 'libros-comics-literatura', sub_category: [{id:34, name:'Mangas', tag: 'mangas'}]},
        {id: 3, name: 'Moda y accesorios', tag: 'moda-accesorios'}
    ];

    const [selectedCategory, setSelectCategory] = useState<number |null>(null);

    const showInfoSubCategory = (id: number | null) => {
      setSelectCategory(prev => (prev === id ? null : id))
    }

    const getCategorySelected = () => {
    return categories.find(cat => cat.id === selectedCategory);
  }
    return (
      <>
      <ul className="fixed h-full gap-6">
      <ul className={`flex flex-col h-full mt-1.5 space-y-2 bg-red-100 rounded  ${open ? 'animate-slide-in-top' : ''} transition-all`}>
        {open && !selectedCategory && categories.map(({tag, name, id, sub_category}) => {
          return (
          <li key={id} className="animate-fade-in-down delay-75 w-72 text-wrap overflow-hidden"
          onClick={sub_category ? () => showInfoSubCategory(id) : undefined}>
          <Link key={id} href={sub_category ? '': tag} className={`flex md:bg-transparent md:p-0 bg-transparen border-l-2 border-transparent text-red-500 hover:border-l-2 hover:border-red-500 transition bg-transparent`} aria-current="page">{name}</Link>
          </li>
          )
        })} 

      {selectedCategory && open && (
      getCategorySelected()?.sub_category && (
      <ul className="flex flex-col h-full space-y-2 bg-red-100 rounded">
        <li className="rounded-t bg-red-400"
        onClick={() => showInfoSubCategory(null)}>
            {getCategorySelected()?.name}
        </li>
      {categories
        .find(cat => cat.id === selectedCategory)
        ?.sub_category?.map(({ id, name, tag }) => (
          <li key={id} className="w-72 text-wrap overflow-hidden">
            <Link href={tag} className="text-red-500 hover:underline w-full">
              {name}
            </Link>
          </li>
        ))}
    </ul>)

  )}
      </ul>
      </ul>
        </>
    );
}
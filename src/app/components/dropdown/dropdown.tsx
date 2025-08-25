import Link from "next/link";
import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { CategoriesInterface } from "../categories/categories.interface";
type DropdownProps = {
  open: boolean;
  categories: CategoriesInterface[]
};

export default function Dropdown({open, categories}: DropdownProps) {

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
      <ul className={`flex flex-col h-full mt-1.5 space-y-2 bg-red-100 rounded py-2.5  ${open ? 'animate-slide-in-top' : ''} transition-all`}>
        {open && !selectedCategory && categories.map(({tag, name, id, sub_category}) => {
          return (
          <li key={id} className="flex animate-fade-in-down delay-75 w-72 text-wrap overflow-hidden px-2.5"
          onClick={sub_category ? () => showInfoSubCategory(id) : undefined}>
          <Link key={id} href={sub_category ? '': tag} className={`flex md:bg-transparent md:p-0 bg-transparen border-l-2 border-transparent text-red-500 hover:border-l-2 hover:border-red-500 transition bg-transparent`} aria-current="page">{name}</Link>
            {sub_category && (
            <ChevronRightIcon className="w-4 h-4 flex items-center mt-1"></ChevronRightIcon>
          )}
          </li>
          )
        })} 

      {selectedCategory && open && (
      getCategorySelected()?.sub_category && (
      <ul className="flex flex-col h-full  bg-red-100 rounded px-2.5">
        <li className="flex animate-fade-in-left delay-75 w-72 text-wrap overflow-hidden border-b-2 border-red-400">
          <ArrowLeftIcon className="w-4 h-4 flex items-center mt-1 hover:scale-125 transition cursor-pointer" onClick={() => showInfoSubCategory(null)}></ArrowLeftIcon>
            <span>{getCategorySelected()?.name}</span>
        </li>
      {categories
        .find(cat => cat.id === selectedCategory)
        ?.sub_category?.map(({ id, name, tag }) => (
          <li key={id} className="animate-fade-in-left delay-75 w-72 text-wrap overflow-hidden">
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
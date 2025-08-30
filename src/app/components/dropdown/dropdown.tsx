import Link from "next/link";
import { ChevronDoubleLeftIcon } from "@heroicons/react/16/solid";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { CategoriesInterface } from "../categories/categories.interface";
type DropdownProps = {
  open: boolean;
  categories: CategoriesInterface[];
  selectedCategory: number | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<number | null>>;

}

export default function Dropdown({ open, categories, selectedCategory, setSelectedCategory }: DropdownProps) {


    const showInfoSubCategory = (id: number | null) => {
      setSelectedCategory((prev: number | null) => (prev === id ? null : id))
    }

    const getCategorySelected = () => {
      return categories.find(cat => cat.id === selectedCategory);
    }
    return (
      <>
      <ul className="fixed h-full gap-6 pb-28">
      <ul className={`flex flex-col h-full mt-1.5 bg-red-100 rounded py-2.5 overflow-y-auto custom-scroll ${open ? 'animate-slide-in-top' : ''} transition-all`}>
        {open && !selectedCategory && categories.map(({tag, name, id, sub_category}) => {
          return (
          <Link key={id} href={sub_category ? '': tag} className={`flex md:bg-transparent md:p-0 bg-transparen text-red-500 hover:border-red-500 hover:underline transition bg-transparent`} aria-current="page">
          <li key={id} className="flex animate-fade-in-down delay-75 w-72 text-wrap overflow-hidden pl-7 cursor-pointer hover:bg-red-200 py-1.5"
          onClick={sub_category ? () => showInfoSubCategory(id) : undefined}>
            <span>{name}</span>
            {sub_category && (
            <ChevronRightIcon className="w-4 h-4 flex items-center mt-1"></ChevronRightIcon>
          )}
          </li>
          </Link>
          )
        })} 

      {selectedCategory && open && (
      getCategorySelected()?.sub_category && (
      <ul className="flex flex-col  bg-red-100 rounded">
        <li className="flex animate-fade-in-left delay-75 w-72 text-wrap border-b-2 border-red-400">
          <ChevronDoubleLeftIcon className="w-4 h-4 flex items-center mt-1 hover:animate- transition cursor-pointer" onClick={() => showInfoSubCategory(null)}></ChevronDoubleLeftIcon>
            <span>{getCategorySelected()?.name}</span>
        </li>
      {categories
        .find(cat => cat.id === selectedCategory)
        ?.sub_category?.map(({ id, name, tag }) => (
          <li key={id} className="flex animate-fade-in-left delay-75 w-72 text-wrap pl-7 cursor-pointer hover:bg-red-200 py-1.5">
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
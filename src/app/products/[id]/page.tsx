'use client';
import { useParams } from 'next/navigation';
import BreadCrumbs from '@/app/components/breadcumb/breadcumb';
import ProductoSwiper from '@/app/components/products/products';
const ProductPage = () => {
  const { id } = useParams() as { id: string };
  const categorySelected = [{id: 2, name: 'Libros', tag: 'libros-comics-literatura', sub_category: [{id:34, name:'Mangas', tag: 'mangas'}, {id:35, name:'Cómics', tag: 'comics'}, {id:36, name:'Libros de texto', tag: 'libros-texto'}, {id:37, name:'Novelas', tag: 'novelas'}, {id:38, name:'Libros infantiles y juveniles', tag: 'libros-infantiles-juveniles'}, {id:39, name:'Otros libros', tag: 'otros-libros'}]},
];
console.log('Decoded ID:', id);
  return (
    <>
    <div className="h-screen">
          <BreadCrumbs
        id={categorySelected[0].id}
      />
      <ProductoSwiper />
    </div>
    </>
  );
};

export default ProductPage;

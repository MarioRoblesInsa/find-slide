import { Breadcrumb,
    BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
 } from '@/components/ui/breadcrumb';
import { Fragment } from 'react';
import { encodeId } from '@lib/utils';
type breadCrumbProps = {
    id: number;
}

export default function Breadcrumbs({id}: breadCrumbProps) {
    // get id
    console.log(id);
    const category = {id: 2, name: 'Libros', tag: 'libros-comics-literatura', sub_category: [{id:34, name:'Mangas', tag: 'mangas'}, {id:35, name:'Cómics', tag: 'comics'}, {id:36, name:'Libros de texto', tag: 'libros-texto'}, {id:37, name:'Novelas', tag: 'novelas'}, {id:38, name:'Libros infantiles y juveniles', tag: 'libros-infantiles-juveniles'}, {id:39, name:'Otros libros', tag: 'otros-libros'}]};

  return (
    <>
    <Breadcrumb>
      <BreadcrumbList>
        {category.sub_category.map((item, idx) => (
          <Fragment key={item.id}>
            <BreadcrumbItem key={item.name + idx}>
            
                <BreadcrumbLink href={'/products/' + encodeId(item.id)}>{item.name}</BreadcrumbLink>

            </BreadcrumbItem>
            {idx < category.sub_category.length - 1 && (
              <BreadcrumbSeparator key={'sep' + idx}>/</BreadcrumbSeparator>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
    </>
  );
}
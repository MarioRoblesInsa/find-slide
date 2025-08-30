export interface CategoriesInterface {
    id: number,
    name: string,
    tag: string,
    sub_category?: SubCategory[];
}
interface SubCategory {
  id: number;
  name: string;
  tag: string;
}
export interface CategoriesInterface {
    id: number, name: string, tag: string, sub_category?: [{id: number, name: string, tag: string}]
}
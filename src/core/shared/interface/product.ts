export interface Productform{
    id : number,
    name: string,
    description: string,
    price: number,
    category: number,
    subcategory: number,
    attribute : Array<number>
}
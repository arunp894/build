export interface NgxDatatable { 
    // The number of elements in the page
    size : number,
    // The total number of elements
    totalElements : number,
    // The total number of pages
    totalPages : number,
    // The current page number
    pageNumber : number,
    rows : Array<any>
}

export class Page {
    // The number of elements in the page
    size: number = 10;
    // The total number of elements
    totalElements: number = 0;
    // The total number of pages
    totalPages: number = 0;
    // The current page number
    pageNumber: number = 0;
    // Currnrt page elements
    rows : Array<any> = []
  }
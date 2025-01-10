import { Injectable } from "@angular/core"
import { NgxDatatable, Page } from "../../interface/ngxdatatable"
import { Action, Selector, State, StateContext, Store } from "@ngxs/store"
import { ProductService } from "../../service/product.service"
import { ImageUpload, ProductCreate, ProductDelete, ProductEdit, ProductList, RemoveImage } from "../action/product.action"
import { Observable, tap } from "rxjs"
import Swal from "sweetalert2"


export interface ProductStateModel{
    table : NgxDatatable,
    category : Array<any>
    filter : {
        page : number,
        page_size : number,
        sort : {},
        search : Record<string, string>[]
    }
    form : {
        submitted : boolean,
        loading : boolean,        
    }
}

@State<ProductStateModel>({
    name: "Product",    
    defaults: {              
        table : new Page(),
        category : [],
        filter : {
            page : 0,
            page_size : 10,
            sort : [],
            search : []
        },
        form : {
            submitted : false,
            loading : false,        
        }     
    }
})
@Injectable()
export class ProductState {


    constructor(private store: Store, public Product : ProductService){ }

    @Selector()
    static rows(state : ProductStateModel){
        return state.table.rows
    }
    @Selector()
    static table(state : ProductStateModel){
        return state.table
    }
    @Selector()
    static form(state : ProductStateModel){
        return state.form
    }
    @Selector()
    static category(state : ProductStateModel){
        return state.category
    }

    @Selector()
    static pagination(state : ProductStateModel): Array<number>{
        const pagination = [];
        const totalPages = Math.ceil(state.table.totalElements / state.table.size); // Ensure we round up for total pages
        let currentPage = state.table.pageNumber;
        let pre = currentPage - 1;
        let next = currentPage + 1;

        // Include the current page
        pagination.push(currentPage);

        // Add previous pages
        while (pre >= 0 && pagination.length < 5) {
            pagination.unshift(pre--); // Add to the beginning of the array
        }

        // Add next pages
        while (next < totalPages && pagination.length < 7) {
            pagination.push(next++);
        }
        return pagination;
    }

    @Action(ProductList)
    ProductList(ctx : StateContext<ProductStateModel>, action : ProductList){        
        ctx.patchState({
            filter : {
                ...ctx.getState().filter,
                page : action.playload.hasOwnProperty('pageNumber')?action.playload['pageNumber']:ctx.getState().filter.page,
                page_size : action.playload.hasOwnProperty('size')?action.playload['size']:ctx.getState().filter.page_size,
                sort : action.playload.hasOwnProperty('sort')?action.playload['sort']:ctx.getState().filter.sort,
                search : action.playload.hasOwnProperty('search')?action.playload['search']:ctx.getState().filter.search,
            }
        })
        const currentState = { ...ctx.getState().filter };
        currentState.page = currentState.page+1
        return this.Product.list(currentState).subscribe({
            next : (data) => {
                ctx.patchState({
                    table : {
                        ...ctx.getState().table,
                        totalElements : data.count,
                        rows : data.results,                       
                        pageNumber : ctx.getState().filter.page,                        
                    }
                })
            }
        })
    }

    @Action(ImageUpload)
    imageupload(ctx : StateContext<ProductStateModel>, action : any):Observable<any>{
        return this.Product.imageupload(action.payload)     
    }

    @Action(RemoveImage)
    removeupload(ctx : StateContext<ProductStateModel>, action : any):Observable<any>{
        return this.Product.removeupload(action.payload)     
    }

    @Action(ProductCreate)
    Productcreate(ctx : StateContext<ProductStateModel>, action : ProductCreate):Observable<any>{
        return this.Product.createproduct(action.payload).pipe(
            tap({
                next : () => {
                    this.store.dispatch(new ProductList({pageNumber : 0}))
                }
            })
        )  
    }

    @Action(ProductEdit)
    Productedit(ctx : StateContext<ProductStateModel>, action : ProductEdit):Observable<any>{
        return this.Product.editproduct(action.payload).pipe(
            tap({
                next : () => {
                    this.store.dispatch(new ProductList({}))
                }
            })
        )  
    }

    @Action(ProductDelete)
    Productdelete(ctx : StateContext<ProductStateModel>, action : ProductDelete):Observable<any>{
        return this.Product.deleteproduct(action.payload).pipe(
                    tap({
                        next : (value) => {
                            Swal.fire({
                                title: "Deleted!",        
                                icon: "success"
                            });
                            this.store.dispatch(new ProductList({}));
                        },
                        error : (error) => {
                            Swal.fire({
                                title: error.error.message,        
                                icon: "error"
                            });
                        }
                    })            
                )
    }
}
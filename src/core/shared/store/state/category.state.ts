import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { NgxDatatable, Page } from "../../interface/ngxdatatable";
import { Injectable } from "@angular/core";
import { CategoryService } from "../../service/category.service";
import { CategotyCreate, CategotyDelete, CategotyEdit, CategotyList, GetCategory } from "../action/category.action";
import { Observable, of, tap } from "rxjs";
import Swal from "sweetalert2";

export interface Category {
    id: number
    name: string
    description: string
    parent: number    
    parent_chain: ParentChain[],
    category : Array<Category>    
}

export interface ParentChain {
    id: number
    name: string
    description: string
}

export interface CategoryStateModel{
    table : NgxDatatable,
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
    category : Array<Array<Category>>
}

@State<CategoryStateModel>({
    name: "Category",
    defaults: {              
        table : new Page(),
        filter : {
            page : 0,
            page_size : 10,
            sort : [],
            search : []
        },
        form : {
            submitted : false,
            loading : false,        
        },
        category : []
    }
})
@Injectable()
export class CategoryState { 

    constructor(private store: Store, public category : CategoryService){ }

    @Selector()
    static rows(state : CategoryStateModel){
        return state.table.rows
    }
    @Selector()
    static category(state : CategoryStateModel){
        return state.category
    }   
    @Selector()
    static table(state : CategoryStateModel){
        return state.table
    }
    @Selector()
    static form(state : CategoryStateModel){
        return state.form
    }

    @Selector()
    static pagination(state : CategoryStateModel): Array<number>{
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

    @Action(GetCategory)
    getcategory(ctx : StateContext<CategoryStateModel>, action : GetCategory) : Observable<any>{           
        const category = ctx.getState().category        
        if(category.length > 0){
            category.splice(action.payload.index+1)
            ctx.patchState({                        
                category : category
            })
        }    
        if(!action.payload.category && action.payload.index != 0) return of(null);
        if(typeof category[action.payload.index] !== 'undefined' && !action.payload.category) return of(null);      
        return this.category.getCategory(action.payload).pipe(
            tap({
                next : (value) => {                
                    if(action.payload.ignoreID && value.data.length){
                        value.data = value.data.filter(e => e.id != action.payload.ignoreID)
                    }
                    if(value.data.length){
                        const category = ctx.getState().category
                        category.push(value.data)
                            ctx.patchState({                        
                            category : category
                        })
                    }                                                                                     
                },
            })
        )
                
    }

    @Action(CategotyList)
    CategotyList(ctx : StateContext<CategoryStateModel>, action : CategotyList){        
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
        return this.category.list(currentState).pipe(
            tap({
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
        )
    }

    @Action(CategotyCreate)
    categorycreate(ctx : StateContext<CategoryStateModel>, action : CategotyCreate):Observable<any>{
        return this.category.createCategory(action.payload).pipe(
            tap({
                next : (value) => {
                    this.store.dispatch(new CategotyList({}));
                }
            })
        )       
    }

    @Action(CategotyEdit)
    categoryeedit(ctx : StateContext<CategoryStateModel>, action : CategotyEdit):Observable<any>{
        return this.category.editCategory(action.payload).pipe(
            tap({
                next : (value) => {
                    this.store.dispatch(new CategotyList({}));
                }
            })
        )
    }

    @Action(CategotyDelete)
    categorydelete(ctx : StateContext<CategoryStateModel>, action : CategotyDelete):Observable<any>{
        return this.category.deleteCategory(action.payload).pipe(
            tap({
                next : (value) => {
                    Swal.fire({
                        title: "Deleted!",        
                        icon: "success"
                    });
                    this.store.dispatch(new CategotyList({}));
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
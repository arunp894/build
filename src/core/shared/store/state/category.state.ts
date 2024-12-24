import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { NgxDatatable, Page } from "../../interface/ngxdatatable";
import { Injectable } from "@angular/core";
import { CategoryService } from "../../service/category.service";
import { CategotyCreate, CategotyDelete, CategotyEdit, CategotyList } from "../action/category.action";
import { Observable } from "rxjs";

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
        }     
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
        
        return this.category.list(ctx.getState().filter).subscribe({
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

    @Action(CategotyCreate)
    categorycreate(ctx : StateContext<CategoryStateModel>, action : CategotyCreate):Observable<any>{
        return this.category.createCategory(action.payload)        
    }

    @Action(CategotyEdit)
    categoryeedit(ctx : StateContext<CategoryStateModel>, action : CategotyEdit):Observable<any>{
        return this.category.editCategory(action.payload)
    }

    @Action(CategotyDelete)
    categorydelete(ctx : StateContext<CategoryStateModel>, action : CategotyDelete):Observable<any>{
        return this.category.deleteCategory(action.payload)
    }

}
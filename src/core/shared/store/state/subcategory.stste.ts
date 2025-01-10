import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { NgxDatatable, Page } from "../../interface/ngxdatatable";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { SubCategoryService } from "../../service/sub-category.service";
import { SubcategoryList, SubcategoryCreate, SubcategoryEdit, SubcategoryDelete, GetCategpry, GetSubCategory } from "../action/subcategory.action";

export interface SubCategoryStateModel{
    table : NgxDatatable,
    category : Array<any>
    subcategory : Array<any>
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

@State<SubCategoryStateModel>({
    name: "SubCategory",    
    defaults: {              
        table : new Page(),
        category : [],
        subcategory : [],
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
export class SubcategoryState { 

    constructor(private store: Store, public category : SubCategoryService){ }

    @Selector()
    static rows(state : SubCategoryStateModel){
        return state.table.rows
    }
    @Selector()
    static table(state : SubCategoryStateModel){
        return state.table
    }
    @Selector()
    static form(state : SubCategoryStateModel){
        return state.form
    }
    @Selector()
    static category(state : SubCategoryStateModel){
        return state.category
    }
    @Selector()
    static subcategory(state : SubCategoryStateModel){
        return state.subcategory
    }

    @Selector()
    static pagination(state : SubCategoryStateModel): Array<number>{
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

    @Action(SubcategoryList)
    CategotyList(ctx : StateContext<SubCategoryStateModel>, action : SubcategoryList){        
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
        return this.category.list(currentState).subscribe({
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

    @Action(SubcategoryCreate)
    categorycreate(ctx : StateContext<SubCategoryStateModel>, action : SubcategoryCreate):Observable<any>{
        return this.category.createCategory(action.payload)        
    }

    @Action(SubcategoryEdit)
    categoryeedit(ctx : StateContext<SubCategoryStateModel>, action : SubcategoryEdit):Observable<any>{
        return this.category.editCategory(action.payload)
    }

    @Action(SubcategoryDelete)
    categorydelete(ctx : StateContext<SubCategoryStateModel>, action : SubcategoryDelete):Observable<any>{
        return this.category.deleteCategory(action.payload)
    }

    @Action(GetCategpry)
    getcategory(ctx : StateContext<SubCategoryStateModel>, action : GetCategpry):Observable<any>{
        return this.category.getcategory().pipe(
            tap({
                next : (value) => {
                    ctx.patchState({
                        category : value.data
                    })
                }
            })
        )
    }
    @Action(GetSubCategory)
    getsubcategory(ctx : StateContext<SubCategoryStateModel>, action : GetSubCategory):Observable<any>{
        return this.category.getsubcategory(action.payload).pipe(
            tap({
                next : (value) => {
                    ctx.patchState({
                        subcategory : value.data
                    })
                }
            })
        )
    }
}
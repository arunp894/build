import { Action,  Selector, State, StateContext, Store } from "@ngxs/store";
import { AttributeCreateModel } from "../../interface/attribute";
import { Injectable } from "@angular/core";
import { AttributeCreate, AttributeDelete, AttributeEdit, AttributeList, } from "../action/attribute.action";
import { AttributeService } from "../../service/attribute.service";
import { Observable, tap } from "rxjs";
import { NgxDatatable, Page } from "../../interface/ngxdatatable";

export interface AttributeStateModel{   
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

@State<AttributeStateModel>({
    name: "attribute",
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
export class AttributeState {

    constructor(private store: Store, public attribute : AttributeService){ }

    @Selector()
    static rows(state : AttributeStateModel){
        return state.table.rows
    }
    @Selector()
    static table(state : AttributeStateModel){
        return state.table
    }
    @Selector()
    static form(state : AttributeStateModel){
        return state.form
    }
    @Selector()
    static pagination(state : AttributeStateModel): Array<number>{
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

    @Action(AttributeList)
    attributelist(ctx : StateContext<AttributeStateModel>, action : AttributeList){        
        ctx.patchState({
            filter : {
                ...ctx.getState().filter,
                page : action.playload.hasOwnProperty('pageNumber')?action.playload['pageNumber']:ctx.getState().filter.page,
                page_size : action.playload.hasOwnProperty('size')?action.playload['size']:ctx.getState().filter.page_size,
                sort : action.playload.hasOwnProperty('sort')?action.playload['sort']:ctx.getState().filter.sort,
                search : action.playload.hasOwnProperty('search')?action.playload['search']:ctx.getState().filter.search,
            }
        })
        
        return this.attribute.list(ctx.getState().filter).subscribe({
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

    @Action(AttributeCreate)
    attributecreate(ctx : StateContext<AttributeStateModel>, action : AttributeCreate):Observable<any>{
        return this.attribute.createAtribute(action.payload)        
    }

    @Action(AttributeEdit)
    attributeedit(ctx : StateContext<AttributeStateModel>, action : AttributeEdit):Observable<any>{
        return this.attribute.attributeedit(action.payload)
    }

    @Action(AttributeDelete)
    attributedelete(ctx : StateContext<AttributeStateModel>, action : AttributeDelete):Observable<any>{
        return this.attribute.attributedelete(action.payload)
    }
}
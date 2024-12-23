import { State, Store } from "@ngxs/store";
import { AttributeCreateModel } from "../../interface/attribute";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export interface AttributeStateModel{
    row : Array<any>
    selected : AttributeCreateModel | null,

}

@State<AttributeStateModel>({
    name: "aTTRIBUTE",
    defaults: {
        row : [],
        selected : null
    }
})
@Injectable()
export class AttributeState {
    constructor(private store: Store, public router: Router){ }

}
import { AttributeCreateModel } from "../../interface/attribute";

export class AttributeCreate{
    static readonly type = 'Attribute Create';
    constructor(public payload:AttributeCreateModel){}
}
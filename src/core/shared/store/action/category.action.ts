
export class CategotyList{
    static readonly type = 'Category List';
    constructor(public playload : Record<string, any>){}
}

export class CategotyCreate{
    static readonly type = 'Categoty Create';
    constructor(public payload:any){}
}

export class CategotyEdit{
    static readonly type = 'Categoty Edit';
    constructor(public payload:any){}
}

export class CategotyDelete{
    static readonly type = 'Categoty delete';
    constructor(public payload:any){}
}
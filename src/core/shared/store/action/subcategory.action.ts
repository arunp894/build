
export class SubcategoryList{
    static readonly type = 'Subcategory List';
    constructor(public playload : Record<string, any>){}
}

export class SubcategoryCreate{
    static readonly type = 'Subcategory Create';
    constructor(public payload:any){}
}

export class SubcategoryEdit{
    static readonly type = 'Subcategory Edit';
    constructor(public payload:any){}
}

export class SubcategoryDelete{
    static readonly type = 'Subcategory delete';
    constructor(public payload:any){}
}
export class GetCategpry{
    static readonly type = 'Get category';
    constructor(){}
}
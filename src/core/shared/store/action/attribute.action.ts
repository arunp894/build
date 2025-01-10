
export class AttributeList{
    static readonly type = 'Attribute List';
    constructor(public playload : Record<string, any>){}
}

export class AttributeCreate{
    static readonly type = 'Attribute Create';
    constructor(public payload:any){}
}

export class AttributeEdit{
    static readonly type = 'Attribute Edit';
    constructor(public payload:any){}
}

export class AttributeDelete{
    static readonly type = 'Attribute delete';
    constructor(public payload:any){}
}

export class AttributeGet{
    static readonly type = 'Attribute get';
}
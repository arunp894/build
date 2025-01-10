
export class ProductList{
    static readonly type = 'Product List';
    constructor(public playload : Record<string, any>){}
}

export class ImageUpload{
    static readonly type = 'Image upload';
    constructor(public playload : any){}
}
export class RemoveImage{
    static readonly type = 'Remove upload';
    constructor(public playload : any){}
}

export class ProductCreate{
    static readonly type = 'Product Create';
    constructor(public payload:any){}
}

export class ProductEdit{
    static readonly type = 'Product Edit';
    constructor(public payload:any){}
}

export class ProductDelete{
    static readonly type = 'Product delete';
    constructor(public payload:any){}
}

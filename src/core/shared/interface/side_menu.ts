export interface Sidebar{
    title : string,    
    menus : Array<{
        title : string,
        link : string,
        is_active : boolean,
        submenu : Array<{
            title : string,
            link : string,
            is_active : boolean,
        }>
    }>
}
import { Sidebar } from "../interface/side_menu";

export const Side_menu : Array<Sidebar> = [
    {
        title : 'dashboard',   
        menus : [
            {
                title : 'Dashboard',
                is_active : false,
                link : '',
                submenu :[]
            },
            {
                title : 'Attribute',
                is_active : false,
                link : '/attribute',
                submenu : []
            },
            {
                title : 'Category',
                is_active : false,
                link : '/category',
                submenu : []
            },
            // {
            //     title : 'Sub Category',
            //     is_active : false,
            //     link : '/subcategory',
            //     submenu : []
            // },
            {
                title : 'Product',
                is_active : false,
                link : '/product',
                submenu : []
            }
        ]
    },
    
]

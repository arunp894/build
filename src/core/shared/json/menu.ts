import { Sidebar } from "../interface/side_menu";

export const Side_menu : Array<Sidebar> = [
    {
        title : 'dashboard',   
        menus : [
            {
                title : 'DashBoad',
                is_active : false,
                link : '',
                submenu :[
                    {
                        title : 'test',
                        is_active : false,
                        link : ''
                    }
                ]
            }
        ]
    },
    {
        title : 'Attribute',
        menus : []
    }
]

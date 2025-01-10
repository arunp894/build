import { Routes } from '@angular/router';
import { ContainerComponent } from '../core/layout/container/container.component';
import { authGuard, authNotGuard } from '../core/auth/auth.guard';

export const Pages: Routes = [
    { path : '', loadComponent : () => import('../app/pages/dashboad/dashboad.component').then(m=>m.DashboadComponent) },
    { path : 'attribute', loadComponent : () => import('../app/pages/attribute/attribute.component').then(m=>m.AttributeComponent) },
    { path : 'category', loadComponent : () => import('../app/pages/category/category.component').then(m=>m.CategoryComponent) },
    { path : 'subcategory', loadComponent : () => import('../app/pages/subcategory/subcategory.component').then(m=>m.SubcategoryComponent) },
    { path : 'product', loadComponent : () => import('../app/pages/product/product.component').then(m=>m.ProductComponent) },
]

export const routes: Routes = [
    { path : '', canActivate : [authGuard], component : ContainerComponent, children : Pages },    
    { path : 'auth', canActivate : [authNotGuard], loadComponent : () => import('../app/pages/auth/auth.component').then(m=>m.AuthComponent)},       
];



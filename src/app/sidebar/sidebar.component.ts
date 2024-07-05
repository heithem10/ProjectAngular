import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard',     title: 'Dashboard',         icon:'nc-bank',         class: '' },
    { path: '/admin/orders',        title: 'Order',             icon:'nc-cart-simple',  class: '' },
    { path: '/admin/user',          title: 'User Profile',      icon:'nc-circle-10',    class: '' },
    { path: '/admin/users',         title: 'Utilisateurs',      icon:'nc-single-02',    class: '' },
    { path: '/admin/products',      title: 'products',          icon:'nc-box',          class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}

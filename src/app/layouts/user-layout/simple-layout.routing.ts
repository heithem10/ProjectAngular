 import { Routes } from "@angular/router";
import { ProductsComponent } from "app/pagesSimpleUser/products/products.component";
import { UserProfileComponent } from "app/pagesSimpleUser/userProfile/userProfile.component";

 export const SimpleLayoutRoutes : Routes = [
        { path: 'product',      component: ProductsComponent },
        { path: 'profile',      component: UserProfileComponent }
 ]
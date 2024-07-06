 import { Routes } from "@angular/router";
import { ProductDetailComponent } from "app/pagesSimpleUser/product-detail/product-detail.component";
import { ProductsComponent } from "app/pagesSimpleUser/products/products.component";
import { UserProfileComponent } from "app/pagesSimpleUser/userProfile/userProfile.component";

 export const SimpleLayoutRoutes : Routes = [
       { path: 'product',      component: ProductsComponent },
       { path: 'profile',      component: UserProfileComponent },
       { path: 'product/:id', component: ProductDetailComponent }
 ]
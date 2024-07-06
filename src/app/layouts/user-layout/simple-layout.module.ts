import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SimpleLayoutRoutes } from './simple-layout.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from 'app/pagesSimpleUser/products/products.component';
import { UserProfileComponent } from 'app/pagesSimpleUser/userProfile/userProfile.component';
import { ProductCardComponent } from 'app/pagesSimpleUser/product-card/product-card.component';
import { ProductDetailComponent } from 'app/pagesSimpleUser/product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SimpleLayoutRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    ProductsComponent,
    UserProfileComponent,
    ProductCardComponent,
    ProductDetailComponent
  ]
})

export class SimpleLayoutModule {}

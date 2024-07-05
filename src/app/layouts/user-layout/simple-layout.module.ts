import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SimpleLayoutRoutes } from './simple-layout.routing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from 'app/pagesSimpleUser/products/products.component';
import { UserProfileComponent } from 'app/pagesSimpleUser/userProfile/userProfile.component';

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
    UserProfileComponent
  ]
})

export class SimpleLayoutModule {}

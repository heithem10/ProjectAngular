// src/app/components/typography/typography.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'app/models/product';


@Component({
  selector: 'product-card-cmp',
  moduleId: module.id,
  templateUrl: 'product-card.component.html'
})
export class ProductCardComponent {
  @Input() product: Product;
}

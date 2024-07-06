import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';

@Component({
    selector: 'products-cmp',
    moduleId: module.id,
    templateUrl: 'products.component.html'
})

export class ProductsComponent implements OnInit{
    products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response.product;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}

// src/app/components/typography/typography.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'typography-cmp',
  moduleId: module.id,
  templateUrl: 'typography.component.html'
})
export class TypographyComponent implements OnInit {
  products: any[] = [];
  productForm: FormGroup;
  selectedProductId: string;
  imagePreview: string | ArrayBuffer | null = '';

  constructor(private productService: ProductService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loadProducts();
    this.initializeForm();
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

  initializeForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.productForm.patchValue({ image: file });
      this.productForm.get('image')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  openAddModal() {
    this.productForm.reset();
    this.selectedProductId = '';
    this.imagePreview = '';
  }

  openUpdateModal(product: any) {
    this.productForm.patchValue(product);
    this.selectedProductId = product._id;
    this.imagePreview = product.image;
  }

  submitForm() {
    if (this.productForm.invalid) {
      return;
    }

    const formData = new FormData();
    Object.keys(this.productForm.controls).forEach(key => {
      formData.append(key, this.productForm.get(key)?.value);
    });
    console.log(this.productForm.value)

    if (this.selectedProductId) {
      // Update product
      this.productService.updateProduct(this.selectedProductId, formData).subscribe(
        (response) => {
          const index = this.products.findIndex(p => p._id === this.selectedProductId);
          if (index !== -1) {
            this.products[index] = response.product;
          }
          this.productService.uploadImage(this.productForm.value.image);
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    } else {
      // Add new product
      this.productService.createProduct(formData).subscribe(
        (response) => {
          this.products.push(response.product);
          this.productService.uploadImage(this.productForm.value.image);
        },
        (error) => {
          console.error('Error creating product:', error);
        }
      );
    }
  }

  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId).subscribe(
      (response) => {
        this.products = this.products.filter(p => p._id !== productId);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "app/services/product.service";
import { Product } from "app/models/product";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReviewService } from "app/services/reviews.service";
import { AuthService } from "app/services/auth-service.service";

@Component({
  selector: "product-detail-cmp",
  moduleId: module.id,
  templateUrl: "product-detail.component.html",
  styleUrls: ["/product-review.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  productId: any;
  product: any;
  reviewForm: FormGroup;
  currentRating = 0;
  reviews: any[] = [];
  totalReviews: number = 0;
  userId: any;
  isHovered: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private reviewService: ReviewService,
    private router: Router,
    private authService: AuthService
  ) {
    this.reviewForm = this.fb.group({
      comment: ["", Validators.required],
    });
    this.productId = this.route.snapshot.paramMap.get("id")!;
  }

  ngOnInit() {
    this.userId = this.authService.getUserId();
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    if (id) {
      this.productId = id;
      this.getProductById(this.productId);
    } else {
      console.error("No product ID in route");
    }
    this.getReviewsByProduct(this.product);
  }

  getProductById(id: any) {
    console.log(id);
    this.productService.getProductById(id).subscribe(
      (data) => {
        this.product = data;
        console.log(this.product);
      },
      (error) => {
        console.error("Error fetching product:", error);
        // Handle error as needed (e.g., show error message)
      }
    );
  }

  getReviews() {
    this.reviewService.getReviewsByProduct(this.productId).subscribe((data) => {
      this.reviews = data.reviews;
      this.totalReviews = data.total_reviews;
    });
  }
  rateStar(star: number) {
    this.currentRating = star;
  }

  onSubmit() {
    if (this.reviewForm.valid && this.currentRating > 0) {
      const review = {
        ...this.reviewForm.value,
        rating: this.currentRating,
        user: this.userId,
      };
      console.log(review);

      this.reviewService.createReview(this.productId, review).subscribe(() => {
        this.router.navigate(["/simple/product"]);
      });
    }
  }
  getReviewsByProduct(productId){
    this.reviewService.getReviewsByProduct(productId).subscribe(
      (data)=>{
        this.reviews = data.reviews;
      }
    )
  }
}

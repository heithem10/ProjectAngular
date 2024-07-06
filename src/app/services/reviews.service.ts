
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Review } from "app/models/review";


@Injectable({
  providedIn: "root",
})
export class ReviewService {
  private apiUrl = "http://localhost:5000/api/v1/reviews";

  constructor(private http: HttpClient) {}

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl, { withCredentials: true });
  }

  getReviewById(id: string): Observable<Review> {
    return this.http.get<Review>(`${this.apiUrl}/${id}`, {
      withCredentials: true,
    });
  }

  createReview(productId: any, reviewData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${productId}`, reviewData, {
      withCredentials: true,
    });
  }

  updateReview(id: string, review: Review): Observable<Review> {
    return this.http.patch<Review>(`${this.apiUrl}/${id}`, review, {
      withCredentials: true,
    });
  }

  deleteReview(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      withCredentials: true,
    });
  }

  getReviewsByProduct(productId: any): Observable<any> {
    return this.http.get<any>(
      `http://localhost:5000/api/v1/products/${productId}/reviews `,
      {
        withCredentials: true,
      }
    );
  }
}

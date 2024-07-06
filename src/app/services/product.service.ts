import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private apiBaseUrl = environment.baseUrl;


  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/products`, { withCredentials: true });
  }

  public getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/products/${productId}`, { withCredentials: true });
  }

  public createProduct(productData: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/products`, productData, { withCredentials: true });
  }

  public updateProduct(id: string, productData: any): Observable<any> {
    return this.http.patch<any>(`${this.apiBaseUrl}/products/${id}`, productData, { withCredentials: true });
  }

  public deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiBaseUrl}/products/${id}`, { withCredentials: true });  
  }

  public uploadImage(image: File): Promise<any> {
    console.log(image)
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post<any>(`${this.apiBaseUrl}/products/uploadImage`, formData, { withCredentials: true }).toPromise();
  }
}
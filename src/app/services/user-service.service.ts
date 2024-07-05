import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from 'app/models/user'; 

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiBaseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { 
    
  }

  public getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/users`, { withCredentials: true });
  }

  public register(user: user): Observable<user> {
    return this.http.post<user>(`${this.apiBaseUrl}/auth/register`, user, { withCredentials: true });
  } 

  public login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/auth/login`, { email, password }, { withCredentials: true });
  }

  public updateUserById(id: string | null, user: any): Observable<user> {
    return this.http.patch<user>(`${this.apiBaseUrl}/users/updateUserById/${id}`, user, { withCredentials: true });
  }

  public getCurrentUser() {
    return this.http.get<any>(`${this.apiBaseUrl}/users/showMe` , { withCredentials: true });
  }

  public updateUserProfile(profileData: any) {
    return this.http.patch<any>(`${this.apiBaseUrl}/users/updateUser`, profileData , { withCredentials: true });
  }

  public updateUserPassword(passwordData: any): Observable<any> {
    return this.http.patch<any>(`${this.apiBaseUrl}/users/updateUserPassword`, passwordData, { withCredentials: true });
  }

  public forgotPassword(email: string): Observable<any> {
  return this.http.post<any>(`${this.apiBaseUrl}/users/forgotPassword`, { email },{ withCredentials: true });
}

public resetPassword(token: string, password: string): Observable<any> {
  return this.http.patch<any>(`${this.apiBaseUrl}/users/resetPassword/${token}`, { password },{ withCredentials: true });
}
  

  getLoggedInUser(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/users/showMe`, { withCredentials: true });
  }

  // Update user profile by ID
  updateLoggedInUser(userId: string, userData: any): Observable<any> {
    return this.http.patch<any>(`${this.apiBaseUrl}/users/updateUserById/${userId}`, userData, { withCredentials: true });
  }
  
  logout(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/auth/logout`, { withCredentials: true });
  }

}

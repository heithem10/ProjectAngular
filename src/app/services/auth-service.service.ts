import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'app/models/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: string | null = null;
  private tokenKey = 'token';
  private userKey = 'user';

  constructor(private router: Router, private cookieService: CookieService) { }

  setToken(token: string) {
    this.cookieService.set(this.tokenKey, token);
  }

  getToken(): string | null {
    return this.cookieService.get(this.tokenKey);
  }

  setRole(role: string) {
    this.role = role;
  }

  getRole(): string | null {
    if (!this.role) {
      const token = this.getToken();
      if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.role = payload.role;
      }
    }
    return this.role;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isExpired = Date.now() >= payload.exp * 1000;
      return !isExpired;
    }
    return false;
  }

  setUserRole(user: any){
    localStorage.setItem(this.userKey, user.role);
  }

  getUserRole(){
    return localStorage.getItem(this.userKey);
  }
  

  logout() {

    localStorage.removeItem(this.userKey);
    this.role = null;
    this.router.navigate(['/login']);
  }
}

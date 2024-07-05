import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    const role = this.authService.getRole();
    if (this.authService.isAuthenticated() && role === 'admin') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
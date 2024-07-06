import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'app/services/user-service.service';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth-service.service';

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private userService: UserServiceService, private authService : AuthService, private router: Router) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (this.formLogin.valid) {
      const email = this.formLogin.get('email')?.value;
      const password = this.formLogin.get('password')?.value;

      this.userService.login(email, password)
        .subscribe(data => {
          console.log(data);
          // Le token est maintenant dans les cookies
          // Redirection en fonction du rôle de l'utilisateur
          if (data && data.user && data.user.role) {
            this.authService.setUserRole(data.user);
            this.authService.setUserId(data.user.userId)
            if (data.user.role === 'admin') {
              this.router.navigate(['/admin']);
            } else if (data.user.role === 'user') {
              this.router.navigate(['/simple']);
            } else {
              // Gérer d'autres rôles si nécessaire
              console.log('Unknown role: ', data.user.role);
            }
          } else {
            console.log('Role information missing in response');
          }
        });
    }
  }
}

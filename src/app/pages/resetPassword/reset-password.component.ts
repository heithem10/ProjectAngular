import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'app/services/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  token: string;

  constructor(private route: ActivatedRoute, private userService: UserServiceService) {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
  }

  onSubmit() {
    if (this.resetPasswordForm.invalid) {
      return;
    }

    const password = this.resetPasswordForm.value.password;
    this.userService.resetPassword(this.token, password).subscribe(
      response => {
        console.log('Password reset successful', response);
      },
      error => {
        console.error('Error resetting password', error);
      }
    );
  }
}

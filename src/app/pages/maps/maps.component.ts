import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'app/services/user-service.service';


@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {

    passwordForm: FormGroup;

  constructor(private userService: UserServiceService) {
    this.passwordForm = new FormGroup({
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.passwordForm.invalid) {
      return;
    }

    const passwordData = this.passwordForm.value;
    this.userService.updateUserPassword(passwordData).subscribe(
      response => {
        console.log('Password updated successfully', response);
      },
      error => {
        console.error('Error updating password', error);
      }
    );
  }

}

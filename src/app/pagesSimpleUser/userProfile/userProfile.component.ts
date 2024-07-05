import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'app/services/user-service.service';

@Component({
    selector: 'userProfile-cmp',
    moduleId: module.id,
    templateUrl: 'userProfile.component.html'
})

export class UserProfileComponent implements OnInit {
    profileForm: FormGroup;
  userProfile: any;

  constructor(private userService: UserServiceService) {
    this.profileForm = new FormGroup({
      username: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.userService.getCurrentUser().subscribe(
      (response: any) => {
        this.userProfile = response.user;
        this.profileForm.patchValue(this.userProfile);
      },
      (error: any) => {
        console.error('Error fetching user profile', error);
      }
    );
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      return;
    }

    const updatedProfile = this.profileForm.value;
    this.userService.updateUserProfile(updatedProfile).subscribe(
      response => {
        console.log('Profile updated successfully', response);
      },
      error => {
        console.error('Error updating profile', error);
      }
    );
  }
}
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'app/models/user';
import { UserServiceService } from 'app/services/user-service.service';


@Component({
  selector: 'table-cmp',
  moduleId: module.id,
  templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';
  formUser!: FormGroup;
  selectedUserId: string | null = null;

  constructor(private userService: UserServiceService , private router: Router) {
    this.formUser = new FormGroup({
      username: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.formUser = new FormGroup({
      username: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('')
    });

    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data.user;
      this.filteredUsers = this.users;
      console.log("user:", this.users);
    }, error => {
      console.error('Error fetching users', error);
    });
  }

  filterUsers() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.username.toLowerCase().includes(term) ||
      user.firstName.toLowerCase().includes(term) ||
      user.lastName.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.address.toLowerCase().includes(term)
    );
  }

  onEditUser(user: any) {
    this.selectedUserId = user._id;
    this.formUser.patchValue({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address
    });
  }

  updateUser() {
    if (this.formUser.invalid) {
      return;
    }

    const updatedUser = this.formUser.value;
    this.userService.updateUserById(this.selectedUserId, updatedUser).subscribe(
      response => {
        console.log('User updated successfully', response);
        this.getUsers(); // Met à jour la liste des utilisateurs après la modification
      },
      error => {
        console.error('Error updating user', error);
      }
    );
  }
}

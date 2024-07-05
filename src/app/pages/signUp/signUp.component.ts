import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'app/models/user';
import { UserServiceService } from 'app/services/user-service.service';

@Component({
    moduleId: module.id,
    selector: 'signUp-cmp',
    templateUrl: 'signUp.component.html',
    styleUrls:['./signUp.component.scss']
})
export class SignUpComponent implements OnInit {
    submitted = false;
    formUser!: FormGroup;
    user!: user;

    constructor(private userService: UserServiceService, private router: Router) {
        this.user = {
            id: '',
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            password: '',
            role: 'user'
        };
    }

    ngOnInit(): void {
        this.formUser = new FormGroup({
            username: new FormControl('', Validators.required),
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            address: new FormControl(''),
            password: new FormControl('', Validators.required),
        });
    }

    signup() {
        if (this.formUser.valid) {
            this.user.username = this.formUser.get('username')?.value;
            this.user.firstName = this.formUser.get('firstName')?.value;
            this.user.lastName = this.formUser.get('lastName')?.value;
            this.user.email = this.formUser.get('email')?.value;
            this.user.address = this.formUser.get('address')?.value;
            this.user.password = this.formUser.get('password')?.value;

            this.userService.register(this.user)
                .subscribe(data => {
                    console.log(data);
                    localStorage.setItem('userId', String(this.user.id));
                    this.router.navigate(['/login']);
                });
        }
    }
}

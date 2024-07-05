import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth-service.service';


@Component({
  selector: 'app-simple-layout',
  templateUrl: './simple-layout.component.html',
  styleUrls: ['./simple-layout.component.scss']
})
export class SimpleLayoutComponent implements OnInit {

   constructor(private authService : AuthService) { }
  private user: any;
   userRole: string;

  ngOnInit() {
    this.userRole = this.authService.getUserRole();
    console.log(this.userRole)
   }
}
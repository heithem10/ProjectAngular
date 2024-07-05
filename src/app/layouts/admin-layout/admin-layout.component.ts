import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth-service.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private authService : AuthService) { }
   userRole: string;

  ngOnInit() {
    this.userRole = this.authService.getUserRole();
    console.log(this.userRole)
   }

}

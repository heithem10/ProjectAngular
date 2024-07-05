import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
import { UserServiceService } from 'app/services/user-service.service';

@Component({
    moduleId: module.id,
    selector: 'simplenavbar-cmp',
    templateUrl: 'simplenavbar.component.html'
})

export class SimpleNavbarComponent implements OnInit{
    location: Location;
    

    public isCollapsed = true;
    @ViewChild("simplenavbar-cmp", {static: false}) button;

    constructor( private userService: UserServiceService,private router: Router) {
       
    }

    ngOnInit(){
        
    }
    

    logout() {
    this.userService.logout().subscribe(
      () => {
        localStorage.removeItem('user'); // Suppression du user dans localStorage
        this.router.navigate(['/login']); // Redirection vers la page de login
      },
      (error) => {
        console.error('Logout failed', error);
      }
    );
  }
}

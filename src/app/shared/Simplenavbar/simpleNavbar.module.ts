import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleNavbarComponent } from './simpleNavbar.component';

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ SimpleNavbarComponent ],
    exports: [ SimpleNavbarComponent ]
})

export class SimpleNavbarModule {}

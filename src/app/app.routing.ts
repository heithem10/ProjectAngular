import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signUp/signUp.component';
import { SimpleLayoutComponent } from './layouts/user-layout/simple-layout.component';
import { AdminGuard } from './services/admin-guard.service';
import { UserGuard } from './services/user-guard.service';
import { ForgotPasswordComponent } from './pages/forgetPassword/forgot-password.component';
import { ResetPasswordComponent } from './pages/resetPassword/reset-password.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
      }
    ]
    
  },
  {
    path: 'simple',
    component: SimpleLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/user-layout/simple-layout.module').then(x => x.SimpleLayoutModule)
      }
    ]
    
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'password-reset/:token', component: ResetPasswordComponent },
  {
    path: 'register',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

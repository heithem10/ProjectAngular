import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from "./pages/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from "./pages/signUp/signUp.component";
import { SimpleLayoutComponent } from "./layouts/user-layout/simple-layout.component";
import { SimpleNavbarModule } from "./shared/Simplenavbar/simpleNavbar.module";
import { AuthService } from "./services/auth-service.service";
import { AdminGuard } from "./services/admin-guard.service";
import { UserGuard } from "./services/user-guard.service";
import { CookieService } from "ngx-cookie-service";
import { ForgotPasswordComponent } from "./pages/forgetPassword/forgot-password.component";
import { ResetPasswordComponent } from "./pages/resetPassword/reset-password.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SimpleLayoutComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: false
    }),
    SidebarModule,
    NavbarModule,
    SimpleNavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
  ],
  providers: [AuthService, AdminGuard, UserGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

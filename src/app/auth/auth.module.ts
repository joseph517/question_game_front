import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: []
})
export class AuthModule { }

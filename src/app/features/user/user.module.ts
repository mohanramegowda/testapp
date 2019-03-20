import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './user.routing';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    routing,
    CommonModule
  ]
})
export class UserModule { }

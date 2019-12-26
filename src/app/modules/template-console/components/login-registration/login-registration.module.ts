import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LoginRegistrationRoutingModule } from './login-registration.routing';
import { LoginRegistrationComponent } from './page/login-registration/login-registration.component';



@NgModule({
  declarations: [LoginRegistrationComponent],
  imports: [
    SharedModule,
    LoginRegistrationRoutingModule
  ]
})
export class LoginRegistrationModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegistrationComponent } from './page/login-registration/login-registration.component';



export const routes: Routes = [
    {
        path: '',
        component: LoginRegistrationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRegistrationRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateConsoleComponent } from './page/template-console/template-console.component';


export const routes: Routes = [
    {
        path: '',
        component: TemplateConsoleComponent,
        children: [
            {
                path: '',
                redirectTo: 'login-registration',
                pathMatch: 'full'
            },
            {
                path: 'login-registration',
                loadChildren: () =>
                    import('@modules/template-console/components/login-registration/login-registration.module')
                        .then(m => m.LoginRegistrationModule)
            },
            {
                path: 'school-application-form',
                loadChildren: () =>
                    import('@modules/template-console/components/school-application-form/school-application-form.module')
                        .then(m => m.SchoolApplicationFormModule)
            },
            {
                path: 'application-fee',
                loadChildren: () =>
                    import('@modules/template-console/components/application-fee/application-fee.module')
                        .then(m => m.ApplicationFeeModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TemplateConsoleRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolApplocationFormComponent } from './page/school-applocation-form.component';



export const routes: Routes = [
    {
        path: '',
        component: SchoolApplocationFormComponent
    },
    {
        path: 'products-management',
        loadChildren: () =>
            import('@modules/template-console/components/school-application-form/components/products-management/products-management.module')
                .then(m => m.ProductsManagementModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SchoolApplicationFormRoutingModule { }

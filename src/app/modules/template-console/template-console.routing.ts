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
                loadChildren: () =>
                import('@modules/template-console/components/category-management/category-management.module')
                    .then(m => m.CategoryManagementModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TemplateConsoleRoutingModule { }

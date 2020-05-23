import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcommerceManagementConsoleComponent } from './page/ecommerce-management-console/ecommerce-management-console.component';

export const routes: Routes = [
  {
    path: '',
    component: EcommerceManagementConsoleComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'my-templates',
        loadChildren: () =>
          import('@modules/my-templates/my-templates.module').then(m => m.MyTemplatesModule)
      },
      {
        path: 'enter-template',
        loadChildren: () =>
          import('@modules/my-templates/page/add-new-template/add-new-template.module')
          .then(m => m.AddNewTemplateModule)
      },
      {
        path: 'sales',
        loadChildren: () =>
          import('@modules/sales/sales.module').then(m => m.SalesModule)
      },
      {
        path: 'template-console',
        loadChildren: () => 
        import('@modules/template-console/template-console.module').then(m => m.TemplateConsoleModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceManagementConsoleRoutingModule { }

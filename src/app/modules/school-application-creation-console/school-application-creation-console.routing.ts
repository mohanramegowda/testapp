import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { SchoolApplicationCreationConsoleComponent } from './page/school-application-creation-console/school-application-creation-console.component';

export const routes: Routes = [
  {
    path: '',
    component: SchoolApplicationCreationConsoleComponent,
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
        path: 'submissions',
        loadChildren: () =>
          import('@modules/submissions/submissions.module').then(m => m.SubmissionsModule)
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
export class SchoolApplicationCreationConsoleRoutingModule { }

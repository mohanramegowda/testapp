import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';


const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('@modules/home/home.module').then(m => m.HomeModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

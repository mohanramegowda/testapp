import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@layout/layout.module').then(m => m.LayoutModule)
  },
  
  {
    path: ':id/:name',
    loadChildren: () =>
      import('@products-app/products-app.module').then(m => m.ProductsAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

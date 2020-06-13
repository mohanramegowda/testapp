import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsHomeComponent } from './products-home.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsHomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@products-app/products/products.module')
            .then(m => m.ProductsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsHomeRoutingModule { }

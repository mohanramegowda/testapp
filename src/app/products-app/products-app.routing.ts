import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProductsHomeComponent } from './products-home/products-home.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
        import('@products-app/products-home/products-home.module')
          .then(m => m.ProductsHomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsAppRoutingModule { }

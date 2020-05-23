import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsManagementComponent } from './products-management.component';




export const routes: Routes = [
    {
        path: '',
        component: ProductsManagementComponent
    },
    {
        path: 'add-product',
        loadChildren: () =>
            import('@modules/template-console/components/category-management/components/add-product/add-product.module')
                .then(m => m.AddProductModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsManagementRoutingModule { }

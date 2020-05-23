import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryManagementComponent } from './page/category-management.component';



export const routes: Routes = [
    {
        path: '',
        component: CategoryManagementComponent
    },
    {
        path: 'products-management',
        loadChildren: () =>
            import('@modules/template-console/components/category-management/components/products-management/products-management.module')
                .then(m => m.ProductsManagementModule)
    },
    {
        path: 'products-preview',
        loadChildren: () =>
            import('@modules/template-console/components/category-management/components/products-preview/products-preview.module')
                .then(m => m.ProductsPreviewModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryManagementRoutingModule { }

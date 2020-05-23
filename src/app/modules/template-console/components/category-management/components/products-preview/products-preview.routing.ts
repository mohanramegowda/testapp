import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPreviewComponent } from './products-preview.component';




export const routes: Routes = [
    {
        path: '',
        component: ProductsPreviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsPreviewRoutingModule { }

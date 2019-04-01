import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    { path: '', component: ProductsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
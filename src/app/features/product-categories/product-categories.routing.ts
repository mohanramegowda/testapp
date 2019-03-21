import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';

const routes: Routes = [
    { path: '', component: ProductCategoriesComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
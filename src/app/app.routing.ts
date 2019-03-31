import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [
  { path: 'login', loadChildren: '../app/features/user/user.module#UserModule' },
  {
    path: 'product-categories',
    loadChildren: '../app/features/product-categories/product-categories.module#ProductCategoriesModule',
    canActivate: [AuthGuard]
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

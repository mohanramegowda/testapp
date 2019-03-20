import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';

const routes:Routes = [
  {path:'user', loadChildren:'../app/features/user/user.module#UserModule'}
]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);

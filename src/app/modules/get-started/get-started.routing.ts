import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './page/get-started/get-started.component';

export const routes: Routes = [
  {
    path: '',
    component: GetStartedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetStartedRoutingModule { }

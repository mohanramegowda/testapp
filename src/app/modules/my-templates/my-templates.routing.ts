import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTemplatesComponent } from './page/my-templates/my-templates.component';


export const routes: Routes = [
  {
    path: '',
    component: MyTemplatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTemplatesRoutingModule { }

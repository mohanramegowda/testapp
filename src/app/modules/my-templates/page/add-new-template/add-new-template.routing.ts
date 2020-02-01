import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewTemplateComponent } from './add-new-template.component';


export const routes: Routes = [
  {
    path: '',
    component: AddNewTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewTemplateRoutingModule { }

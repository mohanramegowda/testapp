import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AddNewTemplateComponent } from './add-new-template.component';
import { AddNewTemplateRoutingModule } from './add-new-template.routing';
import { MatStepperModule } from '@angular/material';



@NgModule({
  declarations: [AddNewTemplateComponent],
  imports: [
    SharedModule,
    AddNewTemplateRoutingModule,
    MatStepperModule
  ]
})
export class AddNewTemplateModule { }
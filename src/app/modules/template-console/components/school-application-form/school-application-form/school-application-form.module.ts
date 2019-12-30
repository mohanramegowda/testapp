import { NgModule } from '@angular/core';
import { SchoolApplocationFormComponent } from './page/school-applocation-form/school-applocation-form.component';
import { SharedModule } from '@shared/shared.module';
import { SchoolApplicationFormRoutingModule } from './school-application-form.routing';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [SchoolApplocationFormComponent],
  imports: [
    SharedModule,
    SchoolApplicationFormRoutingModule,
    MatStepperModule
  ]
})
export class SchoolApplicationFormModule { }

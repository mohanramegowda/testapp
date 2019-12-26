import { NgModule } from '@angular/core';
import { SchoolApplocationFormComponent } from './page/school-applocation-form/school-applocation-form.component';
import { SharedModule } from '@shared/shared.module';
import { SchoolApplicationFormRoutingModule } from './school-application-form.routing';


@NgModule({
  declarations: [SchoolApplocationFormComponent],
  imports: [
    SharedModule,
    SchoolApplicationFormRoutingModule
  ]
})
export class SchoolApplicationFormModule { }

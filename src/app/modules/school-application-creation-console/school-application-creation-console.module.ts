import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line: max-line-length
import { SchoolApplicationCreationConsoleComponent } from './page/school-application-creation-console/school-application-creation-console.component';
import { SharedModule } from '@shared/shared.module';
import { SchoolApplicationCreationConsoleRoutingModule } from './school-application-creation-console.routing';



@NgModule({
  declarations: [SchoolApplicationCreationConsoleComponent],
  imports: [
    SharedModule,
    SchoolApplicationCreationConsoleRoutingModule
  ]
})
export class SchoolApplicationCreationConsoleModule { }

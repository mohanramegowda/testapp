import { NgModule } from '@angular/core';
import { SchoolApplocationFormComponent } from './page/school-applocation-form.component';
import { SharedModule } from '@shared/shared.module';
import { SchoolApplicationFormRoutingModule } from './school-application-form.routing';
import {MatStepperModule} from '@angular/material/stepper';
import { EditSectionTitleDialogComponent } from './components/edit-section-title-dialog/edit-section-title-dialog.component';


@NgModule({
  declarations: [SchoolApplocationFormComponent, EditSectionTitleDialogComponent],
  imports: [
    SharedModule,
    SchoolApplicationFormRoutingModule,
    MatStepperModule
  ],
  entryComponents: [EditSectionTitleDialogComponent]
})
export class SchoolApplicationFormModule { }

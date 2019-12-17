import { NgModule } from '@angular/core';
import { SubmissionsComponent } from './page/submissions/submissions.component';
import { SharedModule } from '@shared/shared.module';
import { SubmissionsRoutingModule } from './submission.routing';



@NgModule({
  declarations: [SubmissionsComponent],
  imports: [
    SharedModule,
    SubmissionsRoutingModule
  ]
})
export class SubmissionsModule { }

import { NgModule } from '@angular/core';
import { SubmissionsComponent } from './page/sales/sales.component';
import { SharedModule } from '@shared/shared.module';
import { SalesRoutingModule } from './sales.routing';



@NgModule({
  declarations: [SubmissionsComponent],
  imports: [
    SharedModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }

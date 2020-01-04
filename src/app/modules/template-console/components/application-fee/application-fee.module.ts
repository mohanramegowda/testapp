import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ApplicationFeeRoutingModule } from './application-fee.routing';
import { ApplicationFeeComponent } from './page/application-fee/application-fee.component';
import { MatStepperModule } from '@angular/material';



@NgModule({
  declarations: [ApplicationFeeComponent],
  imports: [
    SharedModule,
    ApplicationFeeRoutingModule,
    MatStepperModule
  ]
})
export class ApplicationFeeModule { }

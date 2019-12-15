import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetStartedComponent } from './page/get-started/get-started.component';
import { GetStartedRoutingModule } from './get-started.routing';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [GetStartedComponent],
  imports: [
    SharedModule,
    GetStartedRoutingModule
  ]
})
export class GetStartedModule { }

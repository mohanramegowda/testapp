import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetStartedComponent } from './page/get-started/get-started.component';
import { GetStartedRoutingModule } from './get-started.routing';



@NgModule({
  declarations: [GetStartedComponent],
  imports: [
    CommonModule,
    GetStartedRoutingModule
  ]
})
export class GetStartedModule { }

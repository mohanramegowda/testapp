import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { DashboarRoutingModule } from './dashboard.routing';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    DashboarRoutingModule
  ]
})
export class DashboardModule { }

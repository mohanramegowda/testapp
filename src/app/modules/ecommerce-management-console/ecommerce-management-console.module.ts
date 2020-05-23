import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { EcommerceManagementConsoleRoutingModule } from './ecommerce-management-console.routing';
import { EcommerceManagementConsoleComponent } from './page/ecommerce-management-console/ecommerce-management-console.component';



@NgModule({
  declarations: [EcommerceManagementConsoleComponent],
  imports: [
    SharedModule,
    EcommerceManagementConsoleRoutingModule
  ]
})
export class EcommerceManagementConsoleModule { }

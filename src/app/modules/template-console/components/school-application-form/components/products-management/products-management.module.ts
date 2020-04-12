import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import {MatStepperModule} from '@angular/material/stepper';

import { MatTreeModule } from '@angular/material';
import { ProductsManagementRoutingModule } from './products-management.routing';
import { ProductsManagementComponent } from './products-management.component';

@NgModule({
  declarations: [ProductsManagementComponent],
  imports: [
    SharedModule,
    ProductsManagementRoutingModule,
    MatStepperModule,
    MatTreeModule
  ]
})
export class ProductsManagementModule { }

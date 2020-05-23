import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import {MatStepperModule} from '@angular/material/stepper';

import { MatTreeModule } from '@angular/material';
import { ProductsPreviewRoutingModule } from './products-preview.routing';
import { ProductsPreviewComponent } from './products-preview.component';

@NgModule({
  declarations: [ProductsPreviewComponent],
  imports: [
    SharedModule,
    ProductsPreviewRoutingModule,
    MatStepperModule,
    MatTreeModule
  ]
})
export class ProductsPreviewModule { }

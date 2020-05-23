import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import {MatStepperModule} from '@angular/material/stepper';

import { MatTreeModule, MatDialogModule, MatDialogRef } from '@angular/material';
import { AddProductRoutingModule } from './add-product.routing';
import { AddProductComponent } from './add-product.component';

@NgModule({
  declarations: [AddProductComponent],
  imports: [
    SharedModule,
    AddProductRoutingModule,
    MatStepperModule,
    MatTreeModule,
    MatDialogModule
  ],
  providers: [
    {
        provide: MatDialogRef,
        useValue: {}
      },
  ]
})
export class AddProductModule { }

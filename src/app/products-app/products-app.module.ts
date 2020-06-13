import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProductsAppRoutingModule } from './products-app.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsAppRoutingModule,
    SharedModule
  ]
})
export class ProductsAppModule { 
  constructor(){
    console.log("Came inside products app mudule");
  }
}

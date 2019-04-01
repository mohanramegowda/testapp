import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { routing } from './products.routing';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class ProductsModule { }

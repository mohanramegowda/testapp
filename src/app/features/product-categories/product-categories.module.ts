import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { routing } from './product-categories.routing';

@NgModule({
  declarations: [ProductCategoriesComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class ProductCategoriesModule { }

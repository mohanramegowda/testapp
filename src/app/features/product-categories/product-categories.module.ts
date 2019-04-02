import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { routing } from './product-categories.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ProductCategoriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    routing
  ]
})
export class ProductCategoriesModule { }

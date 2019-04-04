import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { routing } from './products.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    SharedModule,
    routing
  ]
})
export class ProductsModule { }

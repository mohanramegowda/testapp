import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProductsHomeRoutingModule } from './products-home.routing';
import { ProductsHomeComponent } from './products-home.component';
import { ToolbarComponent } from '@products-app/toolbar/toolbar.component';



@NgModule({
  declarations: [ProductsHomeComponent, ToolbarComponent],
  imports: [
    CommonModule,
    ProductsHomeRoutingModule,
    SharedModule
  ]
})
export class ProductsHomeModule { 
  constructor(){
    console.log('inside products home component');
  }
}

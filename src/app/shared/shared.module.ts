import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsToolbarComponent } from './items-toolbar/items-toolbar.component';
import { PaginateComponent } from './paginate/paginate.component';

@NgModule({
  exports: [ItemsToolbarComponent, PaginateComponent],
  declarations: [ItemsToolbarComponent, PaginateComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

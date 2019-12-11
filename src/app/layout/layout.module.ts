import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.routing';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from '@shared/shared.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [ContentLayoutComponent, NavComponent,
     AuthLayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }

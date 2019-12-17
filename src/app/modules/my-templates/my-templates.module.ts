import { NgModule } from '@angular/core';
import { MyTemplatesComponent } from './page/my-templates/my-templates.component';
import { SharedModule } from '@shared/shared.module';
import { MyTemplatesRoutingModule } from './my-templates.routing';



@NgModule({
  declarations: [MyTemplatesComponent],
  imports: [
    SharedModule,
    MyTemplatesRoutingModule
  ]
})
export class MyTemplatesModule { }

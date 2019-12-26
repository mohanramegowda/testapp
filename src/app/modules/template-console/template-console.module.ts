import { NgModule } from '@angular/core';
import { TemplateConsoleComponent } from './page/template-console/template-console.component';
import { SharedModule } from '@shared/shared.module';
import { TemplateConsoleRoutingModule } from './template-console.routing';




@NgModule({
  declarations: [TemplateConsoleComponent],
  imports: [
    SharedModule,
    TemplateConsoleRoutingModule
  ]
})
export class TemplateConsoleModule { }

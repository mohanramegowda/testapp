import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { SecondSidebarComponent } from './components/second-sidebar/second-sidebar.component';
import { TemplateListComponent } from './components/template-list/template-list.component';
import { SubmissionListComponent } from './components/submission-list/submission-list.component';
import { TemplateItemComponent } from './components/template-item/template-item.component';
import { SubmissionItemComponent } from './components/submission-item/submission-item.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthenticationPipePipe } from './pipes/authentication-pipe.pipe';
import { DeleteThisDirectiveDirective } from './directives/delete-this-directive.directive';



@NgModule({
  declarations: [MainSidebarComponent, SecondSidebarComponent, TemplateListComponent, SubmissionListComponent, TemplateItemComponent, SubmissionItemComponent, HeaderComponent, AuthenticationPipePipe, DeleteThisDirectiveDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

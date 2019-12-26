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
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FieldConfigurationEngineComponent } from './components/field-configuration-engine/field-configuration-engine.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';

@NgModule({
  declarations: [MainSidebarComponent, FieldConfigurationEngineComponent,
    SecondSidebarComponent, TemplateListComponent,
    SubmissionListComponent, TemplateItemComponent,
    SubmissionItemComponent, HeaderComponent, AuthenticationPipePipe,
    DeleteThisDirectiveDirective,
    MainCarouselComponent],
  imports: [
    CommonModule,
    FormsModule,
    SwiperModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    SwiperModule,
    MainCarouselComponent,
    TemplateListComponent,
    SubmissionListComponent,
    FieldConfigurationEngineComponent
  ]
})
export class SharedModule { }

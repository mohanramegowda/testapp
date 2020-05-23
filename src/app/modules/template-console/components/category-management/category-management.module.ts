import { NgModule } from '@angular/core';
import { CategoryManagementComponent } from './page/category-management.component';
import { SharedModule } from '@shared/shared.module';
import { CategoryManagementRoutingModule } from './category-management.routing';
import {MatStepperModule} from '@angular/material/stepper';
import { EditSectionTitleDialogComponent } from './components/edit-section-title-dialog/edit-section-title-dialog.component';
import { MatTreeModule } from '@angular/material';
import { ProductsPreviewComponent } from './components/products-preview/products-preview.component';


@NgModule({
  declarations: [CategoryManagementComponent, EditSectionTitleDialogComponent],
  imports: [
    SharedModule,
    CategoryManagementRoutingModule,
    MatStepperModule,
    MatTreeModule
  ],
  entryComponents: [EditSectionTitleDialogComponent]
})
export class CategoryManagementModule { }

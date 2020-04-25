import { NgModule } from '@angular/core';
import { SchoolApplocationFormComponent } from './page/school-applocation-form.component';
import { SharedModule } from '@shared/shared.module';
import { SchoolApplicationFormRoutingModule } from './school-application-form.routing';
import {MatStepperModule} from '@angular/material/stepper';
import { EditSectionTitleDialogComponent } from './components/edit-section-title-dialog/edit-section-title-dialog.component';
import { MatTreeModule } from '@angular/material';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsPreviewComponent } from './components/products-preview/products-preview.component';


@NgModule({
  declarations: [SchoolApplocationFormComponent, EditSectionTitleDialogComponent, ProductsPreviewComponent],
  imports: [
    SharedModule,
    SchoolApplicationFormRoutingModule,
    MatStepperModule,
    MatTreeModule
  ],
  entryComponents: [EditSectionTitleDialogComponent]
})
export class SchoolApplicationFormModule { }

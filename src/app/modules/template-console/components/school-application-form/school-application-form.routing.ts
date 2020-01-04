import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolApplocationFormComponent } from './page/school-applocation-form.component';



export const routes: Routes = [
    {
        path: '',
        component: SchoolApplocationFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SchoolApplicationFormRoutingModule { }

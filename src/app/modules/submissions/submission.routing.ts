import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmissionsComponent } from './page/submissions/submissions.component';


export const routes: Routes = [
    {
        path: '',
        component: SubmissionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubmissionsRoutingModule { }

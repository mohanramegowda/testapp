import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationFeeComponent } from './page/application-fee/application-fee.component';


export const routes: Routes = [
    {
        path: '',
        component: ApplicationFeeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationFeeRoutingModule { }

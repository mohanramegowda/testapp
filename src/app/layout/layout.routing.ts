import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './content-layout/content-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: ContentLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () =>
                    import('@modules/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'get-started',
                loadChildren: () =>
                    import('@modules/get-started/get-started.module').then(m => m.GetStartedModule)
            },
            {
                path: 'learn-more',
                loadChildren: () =>
                    import('@modules/learn-more/learn-more.module').then(m => m.LearnMoreModule)
            },
            {
                path: 'creation-console',
                loadChildren: () =>
                    import('@modules/school-application-creation-console/school-application-creation-console.module')
                    .then(m => m.SchoolApplicationCreationConsoleModule)
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }

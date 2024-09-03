import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./shell/route')
    },
    {
        path: '**',
        redirectTo: ''
    }
];

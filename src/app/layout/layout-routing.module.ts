import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'menu1', loadChildren: () => import('./menu1/menu1.module').then(m => m.Menu1Module) },            
            { path: 'menu2', loadChildren: () => import('./menu2/menu2.module').then(m => m.Menu2Module) },            
            { path: 'menu3', loadChildren: () => import('./menu3/menu3.module').then(m => m.Menu3Module) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

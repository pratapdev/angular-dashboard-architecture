import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Menu1Component } from './menu1/menu1.component';

const routes: Routes = [
    {
        path: '', component: Menu1Component, pathMatch:'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Menu1RoutingModule {
}

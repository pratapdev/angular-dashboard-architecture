import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Submenu1Component } from './submenu1/submenu1.component';
import { Menu3Component } from './menu3/menu3.component';
import { Submenu2Component } from './submenu2/submenu2.component';

const routes: Routes = [
  {
    path: '', component: Menu3Component, 
    children: [
      {path: '', redirectTo: 'submenu1'},
      {path: 'submenu1', component: Submenu1Component},
       {path: 'submenu2', component: Submenu2Component}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Menu3RoutingModule { }

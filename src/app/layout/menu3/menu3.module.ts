import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu3RoutingModule } from './menu3-routing.module';
import { Submenu1Component } from './submenu1/submenu1.component';
import { Submenu2Component } from './submenu2/submenu2.component';
import { Menu3Component } from './menu3/menu3.component';

@NgModule({
  imports: [
    CommonModule,
    Menu3RoutingModule
  ],
  declarations: [Submenu1Component, Submenu2Component, Menu3Component]
})
export class Menu3Module { }

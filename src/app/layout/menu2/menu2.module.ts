import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Menu2RoutingModule } from './menu2-routing.module';
import { Menu2Component } from './menu2/menu2.component';

@NgModule({
  imports: [
    CommonModule,
    Menu2RoutingModule
  ],
  declarations: [Menu2Component]
})
export class Menu2Module { }

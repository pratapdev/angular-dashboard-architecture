import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1Component } from './menu1/menu1.component';
import { Menu1RoutingModule } from './menu1-routing.module';


@NgModule({
  imports: [
    CommonModule,
    Menu1RoutingModule,
  ],
  declarations: [Menu1Component]
})
export class Menu1Module { }

import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../app/router.animations';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss'],
  animations: [routerTransition()]
})
export class Menu2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

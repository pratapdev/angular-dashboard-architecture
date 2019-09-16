import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.scss'],
  animations: [routerTransition()]
})
export class Menu3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

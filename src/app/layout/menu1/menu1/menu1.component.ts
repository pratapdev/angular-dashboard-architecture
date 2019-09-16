import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../app/router.animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.scss'],
  animations: [routerTransition()]
})
export class Menu1Component implements OnInit {

  constructor(private http: HttpClient) { 
    this.http.get<any>('https://jsonplaceholder.typicode.com/todoss')
    .subscribe((r) => {
      console.log(r);
    });
  }

  ngOnInit() {
  }

}

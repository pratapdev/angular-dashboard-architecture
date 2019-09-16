import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submenu1',
  templateUrl: './submenu1.component.html',
  styleUrls: ['./submenu1.component.scss']
})
export class Submenu1Component implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get<any>('localhost/api/googleapiphp/powertag.php?q=car&count=3')
        .subscribe((r) => {
          console.log(r);
        });
   }

  ngOnInit() {
  }

}

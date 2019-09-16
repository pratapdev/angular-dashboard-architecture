import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public isLoading: boolean = false;
  constructor(private loaderService: LoaderService) {
     this.loaderService.isLoading.subscribe((res) =>{
      this.isLoading =res;
    });
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preload',
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.css']
})
export class PreloadComponent implements OnInit {

  hide: boolean = false;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.hide = true
    }, 1000);
  }

  ngAfterViewInit() {
    // require("../../../assets/web/js/main.js")
  }

}

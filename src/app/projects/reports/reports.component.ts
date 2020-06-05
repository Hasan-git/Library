import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Utils } from 'src/app/blocks/utils';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  constructor(
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      Utils.loadScript('./assets/web/js/libs/run-chart.js');
      Utils.loadScript('./assets/web/customlib.js');
    }, 2000);
  }

}

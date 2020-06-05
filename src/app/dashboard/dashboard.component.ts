import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { single } from './data';
import { Utils } from '../blocks/utils';
declare var $;
declare var jQuery;
declare var CRUMINA;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  constructor(

  ) {
    Object.assign(this, { single });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {



    setTimeout(() => {
      // require("../../assets/web/js/libs/run-chart.js")
      // require("../../assets/web/customlib.js")

      Utils.loadScript('./assets/web/js/libs/run-chart.js');
      Utils.loadScript('./assets/web/customlib.js');

    }, 1000);
  }

  // @ التصويت على

  single: any[];
  view: any[] = [800, 320];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#faa026', '#fac51d', '#66bd6d', '#e96b56']
  };


  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}

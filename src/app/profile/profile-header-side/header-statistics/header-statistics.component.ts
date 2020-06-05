import { Component, OnInit } from '@angular/core';
import { statistics } from './data';

@Component({
  selector: 'app-header-statistics',
  templateUrl: './header-statistics.component.html',
  styleUrls: ['./header-statistics.component.scss']
})
export class HeaderStatisticsComponent implements OnInit {

  statistics: any = statistics
  public lineChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (any & { annotation: any }) = {
    responsive: true,
  };
  public lineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}

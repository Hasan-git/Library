import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/blocks/utils';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public canvasWidth = 200
  public needleValue = 35
  public centralLabel = ''
  public name = 'Gauge chart'
  public options = {
    hasNeedle: true,
    outerNeedle: true,
    needleColor: "#ddd",
    needleStartValue: 33,
    needleUpdateSpeed: 2,
    arcColors: ["rgb(44,151,222)","lightgray"],
    arcDelimiters: [35],
    rangeLabel: ["5","50"],
    centralLabel: "35",
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      require("../../../assets/web/customlib.js")
      Utils.loadScript('./assets/web/customlib.js');

    }, 200)
  }


}

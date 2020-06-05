import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-box-view',
  templateUrl: './box-view.component.html',
  styleUrls: ['./box-view.component.scss']
})
export class BoxViewComponent implements OnInit {

  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  constructor() { }

  ngOnInit() {
  }

}

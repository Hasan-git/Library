import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-responsive',
  templateUrl: './header-responsive.component.html',
  styleUrls: ['./header-responsive.component.css']
})
export class HeaderResponsiveComponent implements OnInit {

  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  constructor() { }

  ngOnInit() {
  }

}

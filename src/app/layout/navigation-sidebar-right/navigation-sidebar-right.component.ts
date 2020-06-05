import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navigation-sidebar-right',
  templateUrl: './navigation-sidebar-right.component.html',
  styleUrls: ['./navigation-sidebar-right.component.css']
})
export class NavigationSidebarRightComponent implements OnInit {

  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  constructor() { }

  ngOnInit() {
  }

}

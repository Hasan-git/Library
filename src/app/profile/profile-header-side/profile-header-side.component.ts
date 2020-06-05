import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-header-side',
  templateUrl: './profile-header-side.component.html',
  styleUrls: ['./profile-header-side.component.css']
})
export class ProfileHeaderSideComponent implements OnInit {

  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  constructor() { }

  ngOnInit() {
  }

}

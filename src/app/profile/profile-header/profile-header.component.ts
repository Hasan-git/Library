import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  constructor() { }

  ngOnInit() {
  }

}

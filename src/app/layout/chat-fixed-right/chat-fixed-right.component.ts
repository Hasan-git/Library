import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat-fixed-right',
  templateUrl: './chat-fixed-right.component.html',
  styleUrls: ['./chat-fixed-right.component.css']
})
export class ChatFixedRightComponent implements OnInit {

  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  constructor() { }

  ngOnInit() {
  }

}

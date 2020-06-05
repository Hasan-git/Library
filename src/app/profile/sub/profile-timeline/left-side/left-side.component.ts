import { Component, OnInit } from '@angular/core';
import { EventView } from 'src/app/blocks/interface/eventView';
import { calendar, mostReadedBlogs } from './data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {

  events: EventView[] = [];
  calendar: EventView[] = calendar
  mostReadedBlogs: any[] = mostReadedBlogs;
  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  constructor() {

  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { EventView } from 'src/app/blocks/interface/eventView';
import { calendar, mostReadedBlogs, suggustedFriends } from './data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-left-side-content',
  templateUrl: './left-side-content.component.html',
  styleUrls: ['./left-side-content.component.scss']
})
export class LeftSideContentComponent implements OnInit {

  events: EventView[] = [];
  calendar: EventView[] = calendar
  mostReadedBlogs: any[] = mostReadedBlogs;
  suggestedFriends: any[] = suggustedFriends;
  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint

  constructor() { }

  ngOnInit() {
  }

}

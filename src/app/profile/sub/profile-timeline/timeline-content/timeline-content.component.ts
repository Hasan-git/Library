import { PostView } from './../../../../blocks/interface/postView';
import { Component, OnInit } from '@angular/core';
import { posts } from './data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-timeline-content',
  templateUrl: './timeline-content.component.html',
  styleUrls: ['./timeline-content.component.scss']
})
export class TimelineContentComponent implements OnInit {

  posts: PostView[] = posts
  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  constructor() { }

  ngOnInit() {
  }

  //-----------------------------------------------------------------------
  // Public methods
  //-----------------------------------------------------------------------

  loadMore() {
    this.posts = [...this.posts, ...this.posts]
  }

}

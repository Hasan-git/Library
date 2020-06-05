import { Component, OnInit } from '@angular/core';
import { posts } from './data';
import { PostView } from 'src/app/blocks/interface/postView';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-middle-content',
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.scss']
})
export class MiddleContentComponent implements OnInit {

  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  posts: PostView[] = posts
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

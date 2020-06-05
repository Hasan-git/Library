import { Component, OnInit, Input } from '@angular/core';
import { PostView } from 'src/app/blocks/interface/postView';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.css']
})
export class PostBoxComponent implements OnInit {

  @Input() post: PostView;
  mediaBaseUrl: string = environment.localImagesEndpoint
  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint

  constructor() { }

  ngOnInit() {
  }

}

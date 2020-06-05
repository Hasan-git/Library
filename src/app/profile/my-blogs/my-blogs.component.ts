import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.scss']
})
export class MyBlogsComponent implements OnInit {

  imagesBaseUrl: string = environment.localImagesEndpoint
  svgUrl: string = environment.svgUrl
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { blogs__ } from './data';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  blogs = blogs__

  constructor() { }

  ngOnInit() {
  }

}

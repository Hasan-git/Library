import { Component, OnInit } from '@angular/core';
import { news as news_ } from './data';

@Component({
  selector: 'app-news-carousel',
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.scss']
})
export class NewsCarouselComponent implements OnInit {

  news: any = news_
  constructor() { }

  ngOnInit() {
  }

}

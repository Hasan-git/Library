import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  groups = [
    {
      name: "الادارة",
      membersCount: 25,
      membersLeft: 20,
      image: 'group1.jpg',
    },
    {
      name: 'المبيعات',
      membersCount: 100,
      membersLeft: 95,
      image: 'group2.jpg',
    },
    {
      name: 'تنمية بشرية',
      membersCount: 40,
      membersLeft: 35,
      image: 'inst4.jpg',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

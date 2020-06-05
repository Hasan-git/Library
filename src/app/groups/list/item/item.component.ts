import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-group',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemGroupComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}

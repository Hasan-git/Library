import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/blocks/utils';

@Component({
  selector: 'app-meetings-schedule',
  templateUrl: './meetings-schedule.component.html',
  styleUrls: ['./meetings-schedule.component.scss']
})
export class MeetingsScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      // require("../../../assets/web/customlib.js")
      // require("./schedulelib.js")
      Utils.loadScript('./assets/web/meetingSchedulelib.js');

    }, 100)
  }

}

import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/blocks/utils';
declare var $;
declare var Swiper;



@Component({
  selector: 'app-employee-list-step2',
  templateUrl: './employee-list-step2.component.html',
  styleUrls: ['./employee-list-step2.component.scss']
})
export class EmployeeListStep2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      Utils.loadScript('./assets/web/customlib.js')


      // require("../../../assets/web/customlib.js")

      $("#s101").click(() => {
        $("#s101").toggleClass('bg-purple')
        $("#s101").toggleClass('bg-star')
      })

      $("#s102").click(() => {
        $("#s102").toggleClass('bg-purple')
        $("#s102").toggleClass('bg-star')
      })

      $("#s103").click(() => {
        $("#s103").toggleClass('bg-purple')
        $("#s103").toggleClass('bg-star')
      })

      $("#s104").click(() => {
        $("#s104").toggleClass('bg-purple')
        $("#s104").toggleClass('bg-star')
      })

      $("#s105").click(() => {
        $("#s105").toggleClass('bg-purple')
        $("#s105").toggleClass('bg-star')
      })

      $("#s106").click(() => {
        $("#s106").toggleClass('bg-purple')
        $("#s106").toggleClass('bg-star')
      })

      $("#s107").click(() => {
        $("#s107").toggleClass('bg-purple')
        $("#s107").toggleClass('bg-star')
      })

    }, 100);
  }

}

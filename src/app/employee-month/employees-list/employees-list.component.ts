import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/blocks/utils';
declare var $;

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {

      // require("../../../assets/web/customlib.js")
      Utils.loadScript('./assets/web/customlib.js')


      $("#s1").click(()=>{
        $("#s1").toggleClass('bg-purple')
        $("#s1").toggleClass('bg-star')
      })

      $("#s2").click(()=>{
        $("#s2").toggleClass('bg-purple')
        $("#s2").toggleClass('bg-star')
      })

      $("#s3").click(()=>{
        $("#s3").toggleClass('bg-purple')
        $("#s3").toggleClass('bg-star')
      })

      $("#s4").click(()=>{
        $("#s4").toggleClass('bg-purple')
        $("#s4").toggleClass('bg-star')
      })

      $("#s5").click(()=>{
        $("#s5").toggleClass('bg-purple')
        $("#s5").toggleClass('bg-star')
      })

      $("#s6").click(()=>{
        $("#s6").toggleClass('bg-purple')
        $("#s6").toggleClass('bg-star')
      })

      $("#s7").click(()=>{
        $("#s7").toggleClass('bg-purple')
        $("#s7").toggleClass('bg-star')
      })

      $("#s8").click(()=>{
        $("#s8").toggleClass('bg-purple')
        $("#s8").toggleClass('bg-star')
      })
    }, 100);
  }



}

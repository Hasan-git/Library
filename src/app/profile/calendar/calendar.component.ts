import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Utils } from 'src/app/blocks/utils';

declare var $;
declare var FullCalendar;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  load = false
  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  rendered: boolean = false
  constructor() { }

  ngOnInit() {
    this.load = true

  }

  ngAfterViewInit(): void {


    setTimeout(() => {
      // require("../../../assets/web/customlib.js")
      Utils.loadScript('./assets/web/customlib.js');


        // /** @type {(Element|null)} */
        // var div = document.getElementById("calendar");
        // (new FullCalendar.Calendar(div, {
        //   plugins : ["interaction", "dayGrid", "timeGrid"],
        //   defaultView : "dayGridMonth",
        //   defaultDate : "2019-05-07",
        //   header : {
        //     left : "prev",
        //     center : "title",
        //     right : "next,dayGridMonth,timeGridWeek,timeGridDay"
        //   },
        //   buttonText : {
        //     month : " ",
        //     week : " ",
        //     day : " "
        //   },
        //   buttonIcons : {
        //     prev : "far fa-chevron-left",
        //     next : "far fa-chevron-right"
        //   },
        //   eventClick : function(event) {
        //     var i = event.event.url.match(/^modal:(#[-\w]+)$/);
        //     if (i) {
        //       event.jsEvent.preventDefault();
        //       var elidsel = i[1];
        //       $(elidsel).modal("show");
        //     }
        //   },
        //   events : [{
        //     title : "عيد ميلاد كريس غرايسون",
        //     start : "2019-05-08",
        //     url : "modal:#public-event"
        //   }, {
        //     title : "إعداد خطط العشاء ...",
        //     start : "2019-05-08",
        //     url : "modal:#private-event"
        //   }, {
        //     title : "عيد ميلاد جيني ...",
        //     start : "2019-05-30",
        //     url : "modal:#private-event"
        //   }, {
        //     title : "مكالمة فيديو للتحدث ...",
        //     start : "2019-05-30",
        //     url : "modal:#public-event"
        //   }, {
        //     title : "الإفطار في ...",
        //     start : "2019-05-26",
        //     url : "modal:#public-event"
        //   }, {
        //     title : "أرسل الجديد ...",
        //     start : "2019-05-26",
        //     url : "modal:#private-event"
        //   }, {
        //     title : "اصطحب Qwerty إلى ...",
        //     start : "2019-05-26",
        //     url : "modal:#public-event"
        //   }]
        // })).render();


      // try {
      //   var calendarEl = document.getElementById('calendar');


      //   var calendar = new FullCalendar.Calendar(calendarEl, {
      //     plugins: ['dayGrid']
      //   });

      //   calendar.render();

      //   console.log(calendar)
      // } catch (error) {
      //   console.error(error)
      // }


    }, 200);



    // require("../../../assets/web/js/jQuery/jquery-3.4.1.js")
    // require("../../../assets/web/js/libs/jquery.appear.js")
    // require("../../../assets/web/js/libs/jquery.mousewheel.js")
    // require("../../../assets/web/js/libs/perfect-scrollbar.js")
    // require("../../../assets/web/js/libs/jquery.matchHeight.js")
    // require("../../../assets/web/js/libs/svgxuse.js")
    // require("../../../assets/web/js/libs/imagesloaded.pkgd.js")
    // require("../../../assets/web/js/libs/Headroom.js")
    // require("../../../assets/web/js/libs/velocity.js")
    // require("../../../assets/web/js/libs/ScrollMagic.js")
    // require("../../../assets/web/js/libs/jquery.waypoints.js")
    // require("../../../assets/web/js/libs/jquery.countTo.js")
    // require("../../../assets/web/js/libs/popper.min.js")
    // require("../../../assets/web/js/libs/material.min.js")
    // require("../../../assets/web/js/libs/bootstrap-select.js")
    // require("../../../assets/web/js/libs/smooth-scroll.js")
    // require("../../../assets/web/js/libs/selectize.js")
    // require("../../../assets/web/js/libs/swiper.jquery.js")
    // require("../../../assets/web/js/libs/moment.js")
    // require("../../../assets/web/js/libs/daterangepicker.js")
    // require("../../../assets/web/js/libs/fullcalendar.js")
    // require("../../../assets/web/js/libs/isotope.pkgd.js")
    // require("../../../assets/web/js/libs/ajax-pagination.js")
    // require("../../../assets/web/js/libs/Chart.js")
    // require("../../../assets/web/js/libs/chartjs-plugin-deferred.js")
    // require("../../../assets/web/js/libs/circle-progress.js")
    // require("../../../assets/web/js/libs/loader.js")
    // require("../../../assets/web/js/libs/run-chart.js")
    // require("../../../assets/web/js/libs/jquery.magnific-popup.js")
    // require("../../../assets/web/js/libs/jquery.gifplayer.js")
    // require("../../../assets/web/js/libs/mediaelement-and-player.js")
    // require("../../../assets/web/js/libs/mediaelement-playlist-plugin.min.js")
    // require("../../../assets/web/js/libs/ion.rangeSlider.js")
    // require("../../../assets/web/js/libs/leaflet.js")
    // require("../../../assets/web/js/libs/MarkerClusterGroup.js")
    // require("../../../assets/web/js/main.js")
    // require("../../../assets/web/js/libs-init/libs-init.js")

  }

}

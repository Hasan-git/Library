import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';

declare var $;
@Component({
  selector: 'app-new-workflow',
  templateUrl: './new-workflow.component.html',
  styleUrls: ['./new-workflow.component.scss']
})
export class NewWorkflowComponent implements OnInit {


  @ViewChild('swal', { static: false }) private swal: SwalComponent;

  constructor(
    private _router:Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    var _this = this

    setTimeout(() => {
      $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate: '<div class="title">#title#</div>',
        labels: {
          previous: 'السابق',
          next: 'التالي',
          finish: 'موافق',
          current: ''
        },
        onFinished: function (event, currentIndex) {
          _this.swal.fire()
        },

        onStepChanging: function (event, currentIndex, newIndex) {

          var r1 = $('#r1').val()
          var r2 = $('#r2').val();
          var r3 = $('#r3').val();
          var r4 = $('#r4').val();
          var r5 = $('#r5').val();
          var r6 = $('#r6').val();
          var r7 = $('#r7').val();
          var r8 = $('#r8').val();

          console.log(r1,r2)

          $('#td1').text(r1);
          $('#td2').text(r2);
          $('#td3').text(r3);
          $('#td4').text(r4);
          $('#td5').text(r5);
          $('#td6').text(r6);
          $('#td7').text(r7);
          $('#td8').text(r8);

          return true;
        }
      });


      $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();
      $('[data-toggle="popover"]').popover();
      var element = $('input[name="datetimepicker"]');
      if (element.length) {
        var beforeUpdateDate = new Date()
        element.daterangepicker({
          minDate: "12/05/1900",
          startDate: beforeUpdateDate,
          autoUpdateInput: false,
          singleDatePicker: true,
          showDropdowns: true,
          locale: {
            format: "DD/MM/YYYY"
          }
        });
        element.on("focus", function () {
          $(this).closest(".form-group").addClass("is-focused");
        });
        element.on("apply.daterangepicker", function (canCreateDiscussions, roadwork) {
          $(this).val(roadwork.startDate.format("DD/MM/YYYY"));
          $(this).closest(".form-group").addClass("is-focused");
        });
        element.on("hide.daterangepicker", function () {
          if ("" === $(this).val()) {
            $(this).closest(".form-group").removeClass("is-focused");
          }
        });
      }

    }, 400);

  }

  onDone(e) {
    this._router.navigateByUrl("/workflows")
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

declare var $;

@Component({
  selector: 'app-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.scss']
})
export class WorkflowsComponent implements OnInit {

  @ViewChild('swal', { static: false }) private swal: SwalComponent;

  constructor() { }

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
        onFinished: function (event, currentIndex)
        {
          _this.swal.fire()
        },

        onStepChanging: function (event, currentIndex, newIndex) {

          var fullname = $('#first_name').val() + ' ' + $('#last_name').val();
          var email = $('#email').val();
          var phone = $('#phone').val();
          var username = $('#username').val();
          var gender = $('form input[type=radio]:checked').val();
          var address = $('#address').val();

          $('#fullname-val').text(fullname);
          $('#email-val').text(email);
          $('#phone-val').text(phone);
          $('#username-val').text(username);
          $('#address-val').text(address);
          $('#gender-val').text(gender);

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

    }, 1000);

  }

  onDone(e) {
    console.log(e)

  }

}

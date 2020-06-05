import { Component, OnInit } from '@angular/core';
import { PausableObservable, pausable } from 'rxjs-pausable';
import { Subject, interval } from 'rxjs';
declare var $;

@Component({
  selector: 'app-employee-month',
  templateUrl: './employee-month.component.html',
  styleUrls: ['./employee-month.component.scss']
})
export class EmployeeMonthComponent implements OnInit {

  paused = true;
  pausable: PausableObservable<number>;
  constructor() { }

  ngOnInit() {

  }

  start() {
    this.shoot();
    this.pausable = interval(500)
      .pipe(pausable()) as PausableObservable<number>;
    this.pausable.subscribe(this.shoot.bind(this));
    this.pausable.pause();
  }

  toggle() {
    if (this.paused) {
      this.pausable.resume();
    } else {
      this.pausable.pause();
    }
    this.paused = !this.paused;
  }

  shoot() {
    try {
      this.confetti({
        angle: this.random(60, 120),
        spread: this.random(10, 50),
        particleCount: this.random(40, 50),
        origin: {
          y: 0.8
        }
      });
    } catch (e) {
      // noop, confettijs may not be loaded yet
    }
  }


  random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  confetti(args: any) {
    return window['confetti'].apply(this, arguments);
  }

  ngAfterViewInit(): void {

    var _this = this
    var form = $("#example-form");


    var stepsWizard = form.steps({
      headerTag: "h6",
      bodyTag: "section",
      transitionEffect: "fade",
      titleTemplate: '<span class="step">#index#</span> #title#',
      labels: {
        finish: "موافق",
        next: "موافق",
        previous: "العودة",
        loading: "Loading ..."
      },
      onStepChanged: function (event, currentIndex, priorIndex) {
        if (currentIndex == 3) {
          _this.start()
          _this.pausable.resume()
          setTimeout(() => {
            _this.pausable.pause()
          }, 5000);
        }
      }
    });

    $('.ok').click(() => {
      stepsWizard.steps("next");
    })
  }

}

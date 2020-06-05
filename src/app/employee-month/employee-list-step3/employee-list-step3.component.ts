import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-employee-list-step3',
  templateUrl: './employee-list-step3.component.html',
  styleUrls: ['./employee-list-step3.component.scss']
})
export class EmployeeListStep3Component implements OnInit {

  @ViewChild('swal', { static: false }) private swal: SwalComponent;

  constructor(
    private _router:Router

  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      $('.ok').click((event) => {
        this.swal.fire()
      })
    }, 1000);
  }

  onDone(e) {
    this._router.navigateByUrl("/employee-month")
  }

}

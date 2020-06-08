import { Component, OnInit } from '@angular/core';
import { Utils } from '../blocks/utils';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this._router.navigateByUrl("/")
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    setTimeout(() => {
      // @ fix checkbox display
      $.material.init();
    }, 100)
  }

}

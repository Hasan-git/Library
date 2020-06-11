import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor(
    private _router: Router,
    private swUpdate: SwUpdate
  ) {
    this._router.navigateByUrl("/login")
  }

  ngOnInit() {

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

        if (confirm("New version available. Load New Version?")) {

          window.location.reload();
        }
      });
    }
  }

}

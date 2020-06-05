import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint

  ngAfterViewInit() {
    require("../assets/web/js/main.js")

    setTimeout(() => {
      // document.getElementById('open').click()
      // document.getElementById('open-public').click()
    }, 2000);
  }
}

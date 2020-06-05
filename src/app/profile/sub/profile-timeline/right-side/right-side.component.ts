import { friends, suggustedFriends, mostReadedBlogs } from './data';
import { Component, OnInit } from '@angular/core';
import { FriendView } from 'src/app/blocks/interface/friendView';
import { environment } from 'src/environments/environment';

declare var $;

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {

  friends: FriendView[] = friends;
  suggestedFriends: any[] = suggustedFriends;
  mostReadedBlogs: any[] = mostReadedBlogs;
  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {

    setTimeout(() => {
      require("../../../../../assets/web/customlib.js")

      $(document).ready(function () {

        var $this = $(".skills-item");
        $this.each(function () {

          $this.appear({
            force_process: true
          });

            var $wizard = $(this);
            if (!$wizard.data("inited")) {
              $wizard.find(".skills-item-meter-active").fadeTo(300, 1).addClass("skills-animate");
              $wizard.data("inited", true);
            }
        });
      })

    }, 2000);

  }
}

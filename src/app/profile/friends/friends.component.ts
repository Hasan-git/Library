import { FriendView } from 'src/app/blocks/interface/friendView';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { followers__, following__ } from './data';
import { fadeOutLeftOnLeaveAnimation, fadeInRightOnEnterAnimation, lightSpeedInOnEnterAnimation, lightSpeedOutOnLeaveAnimation, fadeInOnEnterAnimation, bounceOutDownOnLeaveAnimation, fadeInUpOnEnterAnimation, bounceInRightAnimation } from 'angular-animations';

enum views {
  "followers",
  "following"
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
  animations: [
    // fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 500, translate: '30px' }),
    // bounceOutDownOnLeaveAnimation({ anchor: 'leaves', duration: 500, delay: 100, translate: '40px' }),
    bounceInRightAnimation(),
    fadeInOnEnterAnimation(),
    fadeOutLeftOnLeaveAnimation(),
    fadeInRightOnEnterAnimation(),
  ]
})
export class FriendsComponent implements OnInit {

  followers: FriendView[] = followers__
  following: FriendView[] = following__
  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  public viewsEnum: typeof views;
  currentView

  constructor() {
    this.viewsEnum = views
    this.currentView = this.viewsEnum.followers
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FriendView } from 'src/app/blocks/interface/friendView';
import { friends, suggustedFriends, mostReadedBlogs } from 'src/app/profile/sub/profile-timeline/right-side/data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-right-side-content',
  templateUrl: './right-side-content.component.html',
  styleUrls: ['./right-side-content.component.scss']
})
export class RightSideContentComponent implements OnInit {

  friends: FriendView[] = friends;
  suggestedFriends: any[] = suggustedFriends;
  mostReadedBlogs: any[] = mostReadedBlogs;
  svgUrl: string = environment.svgUrl
  imagesBaseUrl: string = environment.localImagesEndpoint
  constructor() { }

  ngOnInit() {
  }

}

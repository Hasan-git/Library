import { ListMenuComponent } from './list/list-menu/list-menu.component';
import { PostBoxComponent } from './group/group-timeline/middle-content/post-box/post-box.component';
import { NewPostComponent } from './group/group-timeline/middle-content/new-post/new-post.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedMaterialModule } from './../blocks/common/material-shared-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { ListComponent } from './list/list.component';
import { GroupComponent } from './group/group.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { GroupHeaderComponent } from './group/group-header/group-header.component';
import { GroupTimelineComponent } from './group/group-timeline/group-timeline.component';
import { RightSideContentComponent } from './group/group-timeline/right-side-content/right-side-content.component';
import { LeftSideContentComponent } from './group/group-timeline/left-side-content/left-side-content.component';
import { MiddleContentComponent } from './group/group-timeline/middle-content/middle-content.component';
import { ItemGroupComponent } from './list/item/item.component';


@NgModule({
  declarations: [
    GroupsComponent,
    ListComponent,
    GroupComponent,
    RightNavComponent,
    GroupHeaderComponent,
    GroupTimelineComponent,
    RightSideContentComponent,
    LeftSideContentComponent,
    MiddleContentComponent,
    NewPostComponent,
    PostBoxComponent,
    ListMenuComponent,
    ItemGroupComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedMaterialModule,
    FlexLayoutModule
  ]
})
export class GroupsModule { }

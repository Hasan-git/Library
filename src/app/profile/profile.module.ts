import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FileComponent } from './file/file.component';
import { PostBoxComponent } from './sub/profile-timeline/timeline-content/post-box/post-box.component';
import { NewPostComponent } from './sub/profile-timeline/timeline-content/new-post/new-post.component';
import { NewsCarouselComponent } from './profile-header-side/header-statistics/news-carousel/news-carousel.component';
import { HeaderStatisticsComponent } from './profile-header-side/header-statistics/header-statistics.component';
import { ProfileHeaderSideComponent } from './profile-header-side/profile-header-side.component';
import { TimelineContentComponent } from './sub/profile-timeline/timeline-content/timeline-content.component';
import { RightSideComponent } from './sub/profile-timeline/right-side/right-side.component';
import { LeftSideComponent } from './sub/profile-timeline/left-side/left-side.component';
import { ProfileTimelineComponent } from './sub/profile-timeline/profile-timeline.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FriendsComponent } from './friends/friends.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { FileManagerComponent } from './file-manager/file-manager.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ProfileRoutingModule,
    ChartsModule
  ],
  declarations: [
    ProfileComponent,
    ProfileHeaderComponent,
    ProfileHeaderSideComponent,
    ProfileTimelineComponent,
    FriendsComponent,
    LeftSideComponent,
    RightSideComponent,
    TimelineContentComponent,
    HeaderStatisticsComponent,
    NewsCarouselComponent,
    NewPostComponent,
    PostBoxComponent,
    FileComponent,
    FileManagerComponent,
    CalendarComponent,
    MyBlogsComponent,

  ]
})
export class ProfileModule { }

import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileComponent } from './file/file.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileTimelineComponent } from './sub/profile-timeline/profile-timeline.component';
import { ProfileComponent } from './profile.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: ProfileTimelineComponent,
      },
      {
        path: 'friends',
        component: FriendsComponent,
      },
      {
        path: 'file',
        component: FileComponent,
      },
      {
        path: 'file-manager',
        component: FileManagerComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'blogs',
        component: MyBlogsComponent,
      }
    ]
  },
  // {
  //     path: 'new-',
  //     component: component,
  // },
  // {
  //     path: 'edit/:id',
  //     component: component,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

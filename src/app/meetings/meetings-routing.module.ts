import { MeetingsScheduleComponent } from './meetings-schedule/meetings-schedule.component';
import { OverviewComponent } from './overview/overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingsComponent } from './meetings.component';

const routes: Routes = [
  { path: '', redirectTo: '/meetings/overview', pathMatch: 'full' },

  {
    path: '',
    component: MeetingsComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'schedule',
        component: MeetingsScheduleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }

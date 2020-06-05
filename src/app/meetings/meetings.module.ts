import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import { GaugeChartModule } from 'angular-gauge-chart';
import { OverviewComponent } from './overview/overview.component';
import { MeetingsScheduleComponent } from './meetings-schedule/meetings-schedule.component'


@NgModule({
  declarations: [MeetingsComponent, OverviewComponent, MeetingsScheduleComponent],
  imports: [
    CommonModule,
    MeetingsRoutingModule,
    GaugeChartModule,
    FlexLayoutModule,
  ]
})
export class MeetingsModule { }

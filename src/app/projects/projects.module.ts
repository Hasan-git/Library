import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedMaterialModule } from './../blocks/common/material-shared-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectComponent } from './project/project.component';
import { IssuesComponent } from './issues/issues.component';
import { SummaryComponent } from './summary/summary.component';
import { ReportsComponent } from './reports/reports.component';
import { NgMagicIframeModule } from '@sebgroup/ng-magic-iframe';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ListViewComponent } from './knowledge/list-view/list-view.component';
import { PaneComponent } from './knowledge/pane/pane.component';
import { BoxViewComponent } from './knowledge/box-view/box-view.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectComponent,
    IssuesComponent,
    SummaryComponent,
    ReportsComponent,
    KnowledgeComponent,
    ListViewComponent,
    PaneComponent,
    BoxViewComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NgMagicIframeModule

  ]
})
export class ProjectsModule { }

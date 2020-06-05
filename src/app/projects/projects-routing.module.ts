import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ReportsComponent } from './reports/reports.component';
import { SummaryComponent } from './summary/summary.component';
import { IssuesComponent } from './issues/issues.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ProjectsComponent
  },
  {
    path: ":id",
    component: ProjectComponent,
    children: [
      {
        path: "details",
        component: ProjectDetailsComponent
      },
      {
        path: "issues",
        component: IssuesComponent
      },
      {
        path: "summary",
        component: SummaryComponent
      },
      {
        path: "reports",
        component: ReportsComponent
      },
      {
        path: "knowledge",
        component: KnowledgeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

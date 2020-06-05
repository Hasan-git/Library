import { GroupComponent } from './group/group.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './groups.component';

const routes: Routes = [
  // { path: '**', redirectTo: "/groups/1/group" },
  { path: '', component: ListComponent },
  {
    path: ':id',
    component: GroupsComponent,
    children: [
      {
        path: 'group',
        component: GroupComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }

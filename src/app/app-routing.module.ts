import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [];

const appRoutes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {
    path: '',
    component: AppComponent,
    // canActivate: [ProtectedGuard],
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'blogs',
        loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule),
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'groups',
        loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'terms',
        loadChildren: () => import('./terms/terms.module').then(m => m.TermsModule)
      },
      {
        path: 'workflows',
        loadChildren: () => import('./workflows/workflows.module').then(m => m.WorkflowsModule)
      },
      {
        path: 'meetings',
        loadChildren: () => import('./meetings/meetings.module').then(m => m.MeetingsModule)
      },
      {
        path: 'employee-month/:type',
        loadChildren: () => import('./employee-month/employee-month.module').then(m => m.EmployeeMonthModule)
      },
      { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
      { path: 'orgchart', loadChildren: () => import('./orgchart/orgchart.module').then(m => m.OrgchartModule) },
    ]
  },
  { path: '**', redirectTo: '/profile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

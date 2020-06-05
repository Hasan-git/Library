import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeMonthComponent } from './employee-month.component';

const routes: Routes = [{ path: '', component: EmployeeMonthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeMonthRoutingModule { }

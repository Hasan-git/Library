import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeMonthRoutingModule } from './employee-month-routing.module';
import { EmployeeMonthComponent } from './employee-month.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeListStep2Component } from './employee-list-step2/employee-list-step2.component';
import { EmployeeListStep3Component } from './employee-list-step3/employee-list-step3.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EmployeeListStep4Component } from './employee-list-step4/employee-list-step4.component';

@NgModule({
  declarations: [EmployeeMonthComponent, EmployeesListComponent, EmployeeListStep2Component, EmployeeListStep3Component, EmployeeListStep4Component],
  imports: [
    CommonModule,
    EmployeeMonthRoutingModule,
    SweetAlert2Module
  ]
})
export class EmployeeMonthModule { }

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowsRoutingModule } from './workflows-routing.module';
import { WorkflowsComponent } from './workflows.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NewWorkflowComponent } from './new-workflow/new-workflow.component';

@NgModule({
  declarations: [WorkflowsComponent, NewWorkflowComponent],
  imports: [
    CommonModule,
    WorkflowsRoutingModule,
    FlexLayoutModule,
    SweetAlert2Module
  ]
})
export class WorkflowsModule { }

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FlexLayoutModule,
    MatChipsModule
  ]
})
export class UserManagementModule { }

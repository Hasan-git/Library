import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KmsDriveRoutingModule } from './kms-drive-routing.module';
import { KmsDriveComponent } from './kms-drive.component';


@NgModule({
  declarations: [KmsDriveComponent],
  imports: [
    CommonModule,
    KmsDriveRoutingModule
  ]
})
export class KmsDriveModule { }

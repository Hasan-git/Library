import { SharedMaterialModule } from './../blocks/common/material-shared-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KmsDriveRoutingModule } from './kms-drive-routing.module';
import { KmsDriveComponent } from './kms-drive.component';
import { DriveQuickAcessComponent } from './drive-quick-acess/drive-quick-acess.component';
import { DriveFileTableComponent } from './drive-file-table/drive-file-table.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    KmsDriveComponent,
    DriveQuickAcessComponent,
    DriveFileTableComponent
  ],
  imports: [
    CommonModule,
    KmsDriveRoutingModule,
    FlexLayoutModule,
    SharedMaterialModule,
  ],
  providers: [AngularFirestore, AngularFireStorage]
})
export class KmsDriveModule { }

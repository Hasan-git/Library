import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KmsDriveComponent } from './kms-drive.component';

const routes: Routes = [{ path: '', component: KmsDriveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KmsDriveRoutingModule { }

import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedMaterialModule } from './../blocks/common/material-shared-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgchartRoutingModule } from './orgchart-routing.module';
import { OrgchartComponent } from './orgchart.component';


@NgModule({
  declarations: [OrgchartComponent],
  imports: [
    CommonModule,
    OrgchartRoutingModule,
    FlexLayoutModule,
    SharedMaterialModule,
  ]
})
export class OrgchartModule { }

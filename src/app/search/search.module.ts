import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedMaterialModule } from './../blocks/common/material-shared-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedMaterialModule,
    FlexLayoutModule,
  ]
})
export class SearchModule { }

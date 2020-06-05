import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadComponent } from './preload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PreloadComponent],
  exports: [PreloadComponent]
})
export class PreloadModule { }

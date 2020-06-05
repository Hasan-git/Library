import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderResponsiveComponent } from './header-responsive.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderResponsiveComponent],
  exports: [HeaderResponsiveComponent]
})
export class HeaderResponsiveModule { }

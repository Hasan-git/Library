import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationSidebarRightComponent } from './navigation-sidebar-right.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavigationSidebarRightComponent],
  exports: [NavigationSidebarRightComponent]
})
export class NavigationSidebarRightModule { }

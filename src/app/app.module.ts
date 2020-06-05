import { ShellModule } from './layout/shell/shell.module';
import { ShellComponent } from './layout/shell/shell.component';
import { HeaderResponsiveModule } from './layout/header-responsive/header-responsive.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './layout/header/header.module';
import { PreloadModule } from './layout/preload/preload.module';
import { NavigationSidebarRightModule } from './layout/navigation-sidebar-right/navigation-sidebar-right.module';
import { ChatFixedRightModule } from './layout/chat-fixed-right/chat-fixed-right.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogsModule } from './blogs/blogs.module';
import { ProjectsModule } from './projects/projects.module';
import { SearchModule } from './search/search.module';
import { SharedMaterialModule } from './blocks/common/material-shared-module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    SharedMaterialModule,


    HeaderModule,
    PreloadModule,
    NavigationSidebarRightModule,
    ChatFixedRightModule,
    HeaderResponsiveModule,
    BlogsModule,
    ProjectsModule,
    SearchModule,
    SweetAlert2Module.forRoot()
    // ShellModule,

  ],
  providers: [],
  bootstrap: [
    ShellComponent
  ]
})
export class AppModule { }

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
// firebase imports, omit what you don't need for your app
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
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
  providers: [AngularFirestore, AngularFireStorage],
  bootstrap: [
    ShellComponent
  ]
})
export class AppModule { }

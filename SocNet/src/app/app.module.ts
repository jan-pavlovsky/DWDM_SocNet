import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { GenericPostComponent } from './generic-post/generic-post.component';
import { UsersComponent } from './users/users.component';
import { NewPostComponent } from './new-post/new-post.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FirebaseService } from './firebase.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'users/',
    component: UserDetailComponent
  },
  {
    path: 'posts/',
    component: GenericPostComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: UsersComponent
      },
      {
        path: ':id',
        component: UserDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    GenericPostComponent,
    UsersComponent,
    NewPostComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    CKEditorModule
  ],
  providers: [
    {
      provide: FirestoreSettingsToken,
      useValue: {}
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

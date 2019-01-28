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
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: 'newPost/:userId',
    component: NewPostComponent,
    outlet: 'modal'
  },
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'users',
    component: UsersComponent,
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
  },
  {
    path: 'feed',
    component: FeedComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: FeedComponent
      },
      {
        path: ':id',
        component: GenericPostComponent
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
    UserDetailComponent,
    ProfileComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(routes),
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
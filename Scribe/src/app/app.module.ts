import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { NgxEditorModule } from 'ngx-editor';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { CreateComponent } from './create/create.component';
import { from } from 'rxjs';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentComponent } from './comment/comment.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

firebase.initializeApp({
  apiKey: "AIzaSyAoLfBW5ggxhuv83EiOflsX5_C27aYNNDw",
  authDomain: "scribe-c04e6.firebaseapp.com",
  databaseURL: "https://scribe-c04e6.firebaseio.com",
  projectId: "scribe-c04e6",
  storageBucket: "scribe-c04e6.appspot.com",
  messagingSenderId: "393265694312",
  appId: "1:393265694312:web:fe59b89a2e2aa56f6a9ddd",
  measurementId: "G-5V27F3GH4K"
});

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    FeedComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEditorModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

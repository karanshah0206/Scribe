import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';

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
    FeedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

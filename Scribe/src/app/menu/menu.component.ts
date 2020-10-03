import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loggedIn: boolean = false;
  user: any;

  constructor(public router: Router) {
    this.user = firebase.auth().currentUser;
    if (this.user) { this.loggedIn = true; }
    else { this.loggedIn = false; }
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
      if (this.user) { this.loggedIn = true; }
      else { this.loggedIn = false; }
    });
  }

  ngOnInit(): void {
  }

  logout() {
    firebase.auth().signOut().then(() => { this.router.navigate(['/home']) });
  }

}

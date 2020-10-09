import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: any = {};
  message: string = "";

  constructor() {
    this.getProfile();
  }

  ngOnInit(): void {
  }

  getProfile() {
    let userId = firebase.auth().currentUser.uid;
    firebase.firestore().collection("users").doc(userId).get().then((documentSnapshot) => {
      this.user = documentSnapshot.data();
      this.user.id = documentSnapshot.id;
    }).catch((error) => {
      console.error(error);
      alert("Error occured while fetching profile.");
    });
  }

  updateProfile() {}

}

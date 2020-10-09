import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
    if (firebase.auth().currentUser.uid != this.activatedRoute.snapshot.paramMap.get("id")) {
      this.router.navigate(['/feed']);
    }
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

  updateProfile() {
    firebase.auth().currentUser.updateProfile({
      displayName: this.user.firstName + " " + this.user.lastName,
      photoURL: this.user.photoUrl
    }).then(() => {
      let userId = firebase.auth().currentUser.uid;
      firebase.firestore().collection("users").doc(userId).update({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        hobbies: this.user.hobbies,
        interests: this.user.interests,
        bio: this.user.bio
      }).then(() => {
        this.router.navigate(['/profile/' + userId]);
      }).catch((error) => {
        console.error(error);
        alert("An error occured while updating your profile.");
      });
    }).catch((error) => {
      console.error(error);
      alert("An error occured while updating your profile.");
    });
  }

}

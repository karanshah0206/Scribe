import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {};
  posts: any[] = [];

  constructor(public activatedRoute: ActivatedRoute) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProfile(id);
    this.getPosts(id);
  }

  ngOnInit(): void {
  }

  getProfile(id: string) {
    firebase.firestore().collection("users").doc(id).get().then((documentSnapshot) => {
      this.user = documentSnapshot.data();
      this.user.id = documentSnapshot.id;
    }).catch((error) => {
      console.error(error);
      alert("Error occured while fetching profile.");
    });
  }

  getPosts(id: string) {
    firebase.firestore().collection("posts").where("author", "==", id).get().then((data) => {
      this.posts = data.docs;
    }).catch((error) => {
      console.error(error);
      alert("An error occured while fetching this user's posts.");
    });
  }

}

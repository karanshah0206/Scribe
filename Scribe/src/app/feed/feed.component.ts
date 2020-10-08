import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  user: any = {};
  posts: any[] = [];

  constructor() {
    firebase.firestore().settings({timestampsInSnapshots: true});
    this.user = firebase.auth().currentUser;
    this.getPosts();
  }

  ngOnInit(): void {
  }

  getPosts() {
    firebase.firestore().collection("posts").orderBy("time", "desc").get().then((querySnapshot) => {
      this.posts = querySnapshot.docs;
    }).catch((error) => {
      console.error(error);
      alert ("Error occured in getting Scribes.");
    });
  }

  onPostCreated() {
    this.posts = [];
    this.getPosts();
  }

  onRemove() {
    this.posts = [];
    this.getPosts();
  }

}

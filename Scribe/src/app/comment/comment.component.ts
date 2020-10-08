import { Component, Input, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: any[] = [];
  loggedIn: boolean = false;
  comment: string = "";
  @Input("postId") postId: string;

  constructor() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) { this.loggedIn = true; }
      else { this.loggedIn = false; }
    });
  }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.comments = [];
    firebase.firestore().collection("comments").where("post", "==", this.postId).orderBy("time", "desc").get().then((data) => {
      data.forEach((commentRef) => {
        this.comments.push(commentRef.data());
      });
    });
  }

  postComment() {
    if (this.comment.length < 1) {
      return;
    }
    firebase.firestore().collection("comments").add({
      text: this.comment,
      post: this.postId,
      authorId: firebase.auth().currentUser.uid,
      author: firebase.auth().currentUser.displayName,
      time: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => {
      this.getComments();
      this.comment = "";
    }).catch((error) => {
      console.error(error);
      alert("Error in posting comment.");
    });
  }

}

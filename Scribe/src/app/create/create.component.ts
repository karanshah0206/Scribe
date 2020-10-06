import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  @Output('postCreated') postCreated = new EventEmitter();
  title: string = "";
  content: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  createPost() {
    firebase.firestore().settings({
      timestampsInSnapshots: true
    });
    firebase.firestore().collection("posts").add({
      title: this.title,
      content: this.content,
      author: firebase.auth().currentUser.uid,
      time: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      this.postCreated.emit();
      this.title = "";
      this.content = "";
    }).catch((error) => {
      console.error(error);
      alert("An error occured while publishing your Scribe.");
    });
  }

}

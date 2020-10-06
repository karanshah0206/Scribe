import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
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
    }).then((data) => {console.log(data)}).catch((error) => {console.error(error)});
  }

}

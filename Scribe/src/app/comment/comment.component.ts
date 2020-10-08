import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: any[] = [];
  loggedIn: boolean = false;
  comment: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  postComment() {

  }

}

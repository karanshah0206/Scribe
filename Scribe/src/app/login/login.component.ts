import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userError: any;

  constructor(public formBuilder: FormBuilder, public router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  loginHandle(form) {
    firebase.auth().signInWithEmailAndPassword(form.value.email, form.value.password).then((response) => {
    this.router.navigate(['/feed']);
    }).catch((error) => {
      this.userError = error.message;
    });
  }
}
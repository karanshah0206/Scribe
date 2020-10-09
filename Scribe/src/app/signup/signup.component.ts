import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  userError: any;

  constructor(public formBuilder: FormBuilder, public router: Router) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      verPass: ['', [Validators.required]]
    },{
      validators: this.passwordVerifier("password", "verPass")
    });
  }

  ngOnInit(): void {
  }

  signUpHandle(form) {
    let email: string = form.value.email;
    let password: string = form.value.password;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
      let profNum = Math.floor(Math.random() * 1000);
      response.user.updateProfile({
        displayName: form.value.firstName + " " + form.value.lastName,
        photoURL: "https://api.adorable.io/avatars/" + profNum
      }).then(() => {
        firebase.firestore().collection("users").doc(response.user.uid).set({
          firstName: form.value.firstName,
          lastName: form.value.lastName,
          email: email,
          photoUrl: response.user.photoURL,
          interests: "",
          bio: "",
          hobbies: ""
        }).then(() => {
          this.router.navigate(['/feed']);
        }).catch((error) => {
          this.userError = error;
        });
      });
    }).catch((error) => {
      this.userError = error.message;
    });
  }

  passwordVerifier(password: string, verPass: string) {
    return (group: FormGroup) => {
      let password = group.controls['password'];
      let verPass = group.controls['verPass'];
      if (password.value == verPass.value) { return; }
      else { verPass.setErrors({notEqualToPassword: true}); }
    }
  }

}

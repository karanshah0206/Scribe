import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
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
    console.log(form.value);
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path: '', component: LoginComponent // Replace later when Home Component Created
},{
  path: 'home', component: LoginComponent // Replace later when Home Component Created
},{
  path: 'login', component: LoginComponent
},{
  path: 'signup', component: SignupComponent
},{
  path: '**', redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

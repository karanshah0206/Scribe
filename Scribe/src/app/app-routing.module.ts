import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},{
  path: 'home', component: HomeComponent
},{
  path: 'login', component: LoginComponent
},{
  path: 'signup', component: SignupComponent
},{
  path: 'feed', component: FeedComponent
},{
  path: 'view/:postId', component: ViewComponent
},{
  path: '**', redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

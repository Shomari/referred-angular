import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { AuthGuard } from "./guards/auth.guard";
import { Angular2SocialLoginModule } from "angular2-social-login";

import { AppComponent } from './app.component';
import { PersonalComponent } from './personal_page/personal.component'
import { SideBarComponent } from './personal_page/sidebar.component'
import { SearchBarComponent } from './personal_page/searchbar.component'
import { ResultsBarComponent } from './personal_page/resultsbar.component'
import { FriendsComponent } from './personal_friends/friends.component';
import { MyFriendsComponent } from './personal_friends/my-friends/my-friends.component';
import { FriendComponent } from './personal_friends/my-friends/friend/friend.component';
import { ReferralComponent } from './personal_page/referral/referral.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', canActivate: [AuthGuard],
    children: [
      { path: 'referral/:id', component: ReferralComponent },
      { path: 'friends', component: FriendsComponent },
      {  path: '', component: PersonalComponent },
      {  path: 'login', component: LoginComponent },
    ]
  }
]

let providers = {
    "facebook": {
      "clientId": "1232455580233965",
      "apiVersion": "v2.10" //like v2.4
    }
  };

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    SideBarComponent,
    SearchBarComponent,
    ResultsBarComponent,
    FriendsComponent,
    MyFriendsComponent,
    FriendComponent,
    ReferralComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpModule,
    Angular2SocialLoginModule,
    NgbModule.forRoot()
  ],
  providers: [DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { MessageService } from './services/message.service';
import { HttpModule } from '@angular/http';
import { AuthGuard } from "./guards/auth.guard";
import { Angular2SocialLoginModule } from "angular2-social-login";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal_page/personal.component'
import { SideBarComponent } from './personal_page/sidebar.component'
import { FriendsComponent } from './personal_friends/friends.component';
import { MyFriendsComponent } from './personal_friends/my-friends/my-friends.component';
import { FriendComponent } from './personal_friends/my-friends/friend/friend.component';
import { RecommendationComponent } from './personal_page/recommendation/recommendation.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddRecommendationComponent } from './personal_page/recommendation/add-recommendation/add-recommendation.component';
import { FindForRecommendationComponent } from './personal_page/recommendation/find-for-recommendation/find-for-recommendation.component';
import { SubmittedRecommendationsComponent } from './personal_page/recommendation/submitted-recommendations/submitted-recommendations.component';
import { AddBusinessComponent } from './personal_page/recommendation/add-business/add-business.component';
import { MessageComponent } from './message/message.component';
import { ReferralInfoComponent } from './personal_page/recommendation/referral-info/referral-info.component';
import { ManageReferralsComponent } from './personal_page/recommendation/manage-referrals/manage-referrals.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', canActivate: [AuthGuard],
    children: [
      { path: '', component: PersonalComponent },
      { path: 'recommendation', component: RecommendationComponent },
      { path: 'addRecommendation', component: AddRecommendationComponent },
      { path: 'submittedRecommendations', component: SubmittedRecommendationsComponent },
      { path: 'findForRecommendation', component: FindForRecommendationComponent },
      { path: 'referralInfo', component: ReferralInfoComponent },
      { path: 'myFriends', component: MyFriendsComponent },
      { path: 'manageReferrals', component: ManageReferralsComponent },
      { path: 'friends', component: FriendsComponent },
      {  path: 'personal', component: PersonalComponent },
      {  path: 'login', component: LoginComponent },
      {  path: 'addBusiness', component: AddBusinessComponent},
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
    FriendsComponent,
    MyFriendsComponent,
    FriendComponent,
    RecommendationComponent,
    LoginComponent,
    WelcomeComponent,
    AddRecommendationComponent,
    FindForRecommendationComponent,
    SubmittedRecommendationsComponent,
    AddBusinessComponent,
    MessageComponent,
    ReferralInfoComponent,
    ManageReferralsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpModule,
    FormsModule,
    Angular2SocialLoginModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [DataService, AuthGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);

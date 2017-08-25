import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonalComponent } from './personal_page/personal.component'
import { SideBarComponent } from './personal_page/sidebar.component'
import { SearchBarComponent } from './personal_page/searchbar.component'
import { ResultsBarComponent } from './personal_page/resultsbar.component'
import { FriendsComponent } from './personal_friends/friends.component';
import { MyFriendsComponent } from './personal_friends/my-friends/my-friends.component';
import { FriendComponent } from './personal_friends/my-friends/friend/friend.component'

const appRoutes: Routes = [
  { path: 'friends', component: FriendsComponent },
  {  path: '', component: PersonalComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    SideBarComponent,
    SearchBarComponent,
    ResultsBarComponent,
    FriendsComponent,
    MyFriendsComponent,
    FriendComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

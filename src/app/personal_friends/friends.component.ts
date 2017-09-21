import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'friends',
  templateUrl: './friends.component.html'

})
export class FriendsComponent {
  constructor(private ds: DataService) {}

  addFriendById(): void {
    // this.dataservice.addFreindById()
    // dataservice to create a new UsersFriends
  }


  // sept 10, figure out best eway for localstoage to send data here.  either through
  // json srignify or not
  addFriendByEmail(email): void {
    let data = localStorage.getItem('user_data');
    let user_data = JSON.parse(data);
    let id = user_data['facebook_uid']
    this.ds.addFriendByEmail(id, email)

  }
}

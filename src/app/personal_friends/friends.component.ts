import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../interfaces/user.interface';


@Component({
  selector: 'friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  public friends: User[]
  public loaded: boolean = false

  constructor(private ds: DataService) {}

  addFriendById(): void {
  }

  searchFriendByName(name): void {
    this.ds.searchFriendByName(name).subscribe(data => {
      this.friends = data;
      this.loaded = true;
      console.log(this.friends)
      if(this.friends == null) {

      }
    }, error => { console.log('error in Friend component')});
  }

  // sept 10, figure out best eway for localstoage to send data here.  either through
  // json srignify or not
  searchFriendByEmail(email): void {
    this.ds.searchFriendByEmail(email).subscribe(data => {
      this.friends = data;
      this.loaded = true;
    }, error => { console.log('error in Friend component')});
  }
}

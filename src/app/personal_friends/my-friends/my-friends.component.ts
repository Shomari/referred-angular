import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Friend } from '../../interfaces/friend.interface';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.css']
})
export class MyFriendsComponent implements OnInit {
  //create interface
  public friends: Friend[];
  public loaded: boolean = false;

  constructor(private dataService: DataService) {}

  //here you need to get data from the service of friends and send that to html
  // in html you need to roate through the data and display the name and info

  ngOnInit() {
    this.loadFriends();

  }

  loadFriends() {
    this.dataService.getFriends().subscribe(data => {
      this.friends = data;
      this.loaded = true;

      console.log(this.friends)}
    );
    // console.log(this.friends)

  }

}

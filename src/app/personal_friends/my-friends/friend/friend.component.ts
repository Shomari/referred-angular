import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../../../interfaces/friend.interface'

@Component({
  selector: 'friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  @Input() friend:Friend;

  constructor() { }

  ngOnInit() {
  }

  getReferrals(id:number) {
    console.log(id);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../../../interfaces/friend.interface'
import { DataService } from '../../../services/data.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  @Input() friend:Friend;

  constructor(
    private dataService: DataService,
    private router: Router ) { }

  ngOnInit() {
  }

  goToRecommendations(friendId:number){
    localStorage.setItem('last_friend_referral_id', JSON.stringify(friendId));
    this.router.navigate([`/recommendation`]);
  }

}

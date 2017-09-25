import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Recommendation } from '../../interfaces/recommendation.interface'
import { Router, Data } from '@angular/router';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  public recommendations: Recommendation[];
  public loaded: boolean = false;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    let id = localStorage.getItem('last_friend_referral_id')
    this.getFriendsRecommendations(JSON.parse(id));
  }

  getFriendsRecommendations(id:number) {
    this.dataService.getFriendRecommendations(id).subscribe(data => {
      this.recommendations = data;
      this.loaded = true;
    }, error => { console.log('error in recommendation compoennet')}

    );

    console.log(id);
  }

}

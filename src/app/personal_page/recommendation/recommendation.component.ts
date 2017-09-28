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

  @Input() recommendations:Recommendation[];
  // public recommendations: Recommendation[];
  public loaded: boolean = false;
  public headerText: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    if(this.recommendations == null) {
      let id = localStorage.getItem('last_friend_referral_id')
      this.getFriendsRecommendations(JSON.parse(id));
    } else {
      console.log(this.recommendations)
      let category = this.recommendations[0]["category"];
      this.headerText = `Your friends' ${category} recommendations`
      this.loaded = true
    }
  }

  getFriendsRecommendations(id:number) {
    this.dataService.getFriendRecommendations(id).subscribe(data => {
      this.recommendations = data;
      this.loaded = true;
    }, error => { console.log('error in recommendation compoennet')}
    );
  }

}

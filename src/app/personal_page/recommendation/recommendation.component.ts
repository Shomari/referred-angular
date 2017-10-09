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

  constructor(private ds: DataService, private router: Router) { }

  // If recommendations aren't passed in, then get the id of the friend
  // that was clicked on.
  ngOnInit() {
    if(this.recommendations == null) {
      let id = localStorage.getItem('last_friend_referral_id')
      this.getFriendsRecommendations(JSON.parse(id));
    } else {
      console.log(this.recommendations)
      console.log('-----')
      let category = this.recommendations[0]["category"];
      this.headerText = `Your friends' ${category} recommendations`
      this.loaded = true
    }
  }

  getFriendsRecommendations(id:number) {
    this.ds.getFriendRecommendations(id).subscribe(data => {
      this.recommendations = data;
      this.loaded = true;
    }, error => { console.log('error in recommendation compoennet')}
    );
  }

  createReferral(recommendation_id: string) {
    this.ds.createReferral(recommendation_id);
    this.router.navigate(['/referralInfo'])

  }

}

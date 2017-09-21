import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Recommendation } from '../../interfaces/recommendation.interface'
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  public recommendations: Recommendation[];
  public loaded: boolean = false;

  constructor(private dataService: DataService,    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = localStorage.getItem('last_friend_referral_id')
    this.getReferrals(JSON.parse(id));
  }

  getReferrals(id:number) {
    this.dataService.getReferrals(id).subscribe(data => {
      console.log(data);
      this.recommendations = data;
      this.loaded = true;
    }

    );

    console.log(id);
  }

}

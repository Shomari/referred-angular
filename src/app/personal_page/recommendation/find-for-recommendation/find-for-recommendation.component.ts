import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Business } from '../../../interfaces/business.interface';

@Component({
  selector: 'find-for-recommendation',
  templateUrl: './find-for-recommendation.component.html',
  styleUrls: ['./find-for-recommendation.component.css']
})
export class FindForRecommendationComponent implements OnInit {
// public friends: Friend
  public business: Business
  public loaded: boolean = false
  constructor(private ds: DataService, private router: Router) { }

  ngOnInit() {
  }

  searchByBuid(buid){
    this.ds.getBizByBuid(buid).subscribe(data => {
      this.business = data;
      this.loaded = true
      console.log(data);
    }, error => {console.log('error in find for recommendaiton component')});
  }

  submitRecommendation(recommendation_text: string){
    this.ds.submitBizRecommendation(this.business, recommendation_text)
    this.router.navigate([''])
  }
}

import { Component, OnInit } from '@angular/core';
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
  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  searchByBuid(buid){
    this.ds.getBizByBuid(buid).subscribe(data => {
      console.log('what');
      this.business = data
      console.log(data);
    });

  }
}

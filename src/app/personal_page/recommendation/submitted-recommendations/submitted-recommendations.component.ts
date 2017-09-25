import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Recommendation } from '../../../interfaces/recommendation.interface';


@Component({
  selector: 'app-submitted-recommendations',
  templateUrl: './submitted-recommendations.component.html',
  styleUrls: ['./submitted-recommendations.component.css']
})
export class SubmittedRecommendationsComponent implements OnInit {

  public recommendations: Recommendation[];
  public loaded: boolean = false;

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit() {
    this.loadSubmittedRecommendations();
  }

  loadSubmittedRecommendations() {
    this.ds.loadSubmittedRecommendations().subscribe(data => {
      this.recommendations = data;
      this.loaded = true;
    }, error => { console.log('error in recommendation compoennet')});
  }

  deleteRecommendation(id: string){
    this.ds.deleteRecommendation(id);
    this.router.navigate(['/submittedRecommendations'])
  }
}

    // console.log(id);

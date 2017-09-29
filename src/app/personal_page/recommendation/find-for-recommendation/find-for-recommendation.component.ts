import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Business } from '../../../interfaces/business.interface';
import { Category } from '../../../interfaces/category.interface'


@Component({
  selector: 'find-for-recommendation',
  templateUrl: './find-for-recommendation.component.html',
  styleUrls: ['./find-for-recommendation.component.css']
})
export class FindForRecommendationComponent implements OnInit {
// public friends: Friend
  public business: Business
  public businesses: Business[]
  public loaded: boolean = false
  public catLoaded: boolean = false
  public categories: Category[];
  constructor(private ds: DataService, private router: Router) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.ds.getCategories().subscribe(data => {
      this.categories = data;
      this.catLoaded = true;
    }, error => { console.log('error in searchBar compoennet')});
  }

  searchByBuid(buid){
    this.ds.getBizByBuid(buid).subscribe(data => {
      this.business = data;
      this.loaded = true
      console.log(data);
    }, error => {console.log('error in find for recommendaiton component')});
  }

  searchByZip(category: string, zipcode: string) {
    this.ds.getBizByZip(category, zipcode).subscribe(data => {
      this.businesses = data;
      this.loaded = true
      console.log(data);
    }, error => {console.log('error in find for recommendaiton component')});
  }

  submitRecommendation(recommendation_text: string){
    this.ds.submitBizRecommendation(this.business, recommendation_text)
    this.router.navigate([''])
  }
}

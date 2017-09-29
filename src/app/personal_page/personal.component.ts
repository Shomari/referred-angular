import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Category } from '../interfaces/category.interface'
import { Recommendation } from '../interfaces/recommendation.interface'


@Component({
  selector: 'personal',
  templateUrl: './personal.component.html'

})
export class PersonalComponent {

  public categories: Category[];
  public recommendations: Recommendation[];
  public loaded: boolean = false;
  public recLoaded: boolean = false;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.loadCategories()
  }

  loadCategories() {
    this.ds.getCategories().subscribe(data => {
      this.categories = data;
      this.loaded = true;
    }, error => { console.log('error in searchBar compoennet')});
  }

  getRecommendationsForCategory(id: number) {
    console.log(id)
    console.log('+++++++++++')
    this.ds.getRecommendationsForCategory(id).subscribe(data => {
      this.recommendations = data;
      this.recLoaded = true;
    }, error => {console.log('error in get recs for category searchbar')})
  }

}

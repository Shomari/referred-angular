import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Business } from '../../../interfaces/business.interface'

@Component({
  selector: 'app-add-recommendation',
  templateUrl: './add-recommendation.component.html',
  styleUrls: ['./add-recommendation.component.css']
})
export class AddRecommendationComponent implements OnInit {

  @Input() business:Business;
  constructor() { }

  ngOnInit() {
  }

}

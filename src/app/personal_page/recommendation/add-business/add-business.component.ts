import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Business } from '../../../interfaces/business.interface'
import { DataService } from '../../../services/data.service'

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent implements OnInit {

  public business: Business

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit() {
  }

  submitBusiness(formData: any) {
    this.ds.submitBizLead(formData);
    //message service success please
    this.router.navigate([''])
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../interfaces/user.interface';
import { Router } from "@angular/router";




@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public user: User;

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.ds.logInFB().subscribe(data => {
      this.user = data;
      this.router.navigate(['/personal']);
        
    });
  }

}

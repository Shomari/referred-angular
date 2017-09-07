import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../interfaces/user.interface';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public user: User;

  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  login(){
    this.ds.logInFB().subscribe(data => {
      this.user = data;
    });
  }

}

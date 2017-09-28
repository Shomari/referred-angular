import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../services/auth.service'
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from '../interfaces/user.interface';
import {Router} from "@angular/router";


@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(){

  }

  logout(){
    localStorage.removeItem('access_token');
    this.router.navigate(['/welcome']);

  }


}

import { Component, OnInit, OnChanges } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {Router} from "@angular/router";
import {environment} from "../environments/environment";
import { MessageService } from './services/message.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public success: boolean = false

  constructor(private router: Router, private ms: MessageService){}

  logout(){
    localStorage.removeItem('access_token');
    this.router.navigate(['/welcome']);
  }

}

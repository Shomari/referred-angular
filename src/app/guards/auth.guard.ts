import { Injectable }     from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(){
    // Use line below if you want to begin checking expired at
    // return new Date().getTime() < expiresAt;
    
    var token = localStorage.getItem('access_token')
    if( token != null ) {
      return true
    } else {
      this.router.navigate(['/welcome']);
    }
  }

}

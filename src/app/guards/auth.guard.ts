import { Injectable }     from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(){
    // Use line below if you want to begin checking expired at
    // return new Date().getTime() < expiresAt;

    let user = localStorage.getItem('user_data')
    if( user ) {
      console.log('true')
      return true
    } else {
      console.log('false')
      this.router.navigate(['/welcome']);
      return false
    }
  }

}

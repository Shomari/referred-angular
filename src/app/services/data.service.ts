import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Friend } from '../interfaces/friend.interface'
import { Referral } from '../interfaces/referral.interface'
import { User } from '../interfaces/user.interface'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AuthService } from "angular2-social-login";


@Injectable()
export class DataService {

  constructor( private http: Http, private auth: AuthService ) { }

  public getFriends(): Observable<Friend[]> {
    return this.http.get('http://localhost:3000/friends')
    .map((res: Response) => <Friend[]>res.json())
  }

  public getReferrals(id: number): Observable<Referral[]> {
    return this.http.get(`http://localhost:3000/referrals/${id}`)
    .map((res: Response) => <Referral[]>res.json())
  }

  public addFriendById(userId: number, friendId: number): void {
    this.http.post(`http://localhost:3000/`, {user_id: userId, friend_id: friendId})
  }

  public logInFB(): any {
    return this.auth.login('facebook')
      .map((res: User) => {<User>res
      this.loggedIn(res)} )
  }

  public loggedIn(data): any {
    this.http.post(`http://localhost:3000/callback`, {data: data}).subscribe()
    console.log(data);
    localStorage.setItem('access_token', data.accessToken);
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Friend } from '../interfaces/friend.interface'
import { Recommendation } from '../interfaces/recommendation.interface'
import { Business } from '../interfaces/business.interface'
import { User } from '../interfaces/user.interface'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AuthService } from "angular2-social-login";


@Injectable()
export class DataService {

  constructor( private http: Http, private auth: AuthService ) { }

  public getFriends(): Observable<Friend[]> {
    let data = localStorage.getItem('user_data');
    let user_data = JSON.parse(data);
    let token = user_data['token']
    console.log(token);

    return this.http.get(`http://localhost:3000/friends?token=${token}`)
    .map((res: Response) => <Friend[]>res.json())
  }

  // get referrals for a particular friend.  Id is friend id
  public getFriendReferrals(friend_id: number): Observable<Recommendation[]> {
    return this.http.get(`http://localhost:3000/referrals/${friend_id}`)
    .map((res: Response) => <Recommendation[]>res.json())
  }

  public addFriendById(userId: number, friendId: number): void {
    this.http.post(`http://localhost:3000/`, {facebook_uid: userId, friend_id: friendId})
  }

  public addFriendByEmail(userId: string, friendEmail: string): void {
    this.http.post(`http://localhost:3000/friends`, {facebook_uid: userId, friend_email: friendEmail})
    .subscribe()
  }

  getBizByBuid(buid: number): Observable<Business> {
    console.log(buid)
    console.log('yo')

    return this.http.get(`http://localhost:3000/buid/${buid}`)
    .map((res: Response) => <Business>res.json())
  }

  public logInFB(): any {
    return this.auth.login('facebook')
      .map((res: User) => {<User>res
      this.loggedIn(res)} )
  }

  public loggedIn(data): any {
    var params = {name: data['name'], facebook_uid: data['uid'], email: data['email'],
              image_location: data['image'], token: data['token']}
    this.http.post(`http://localhost:3000/login`, {user: params}).subscribe(res => {
      params['uuid'] = res['_body']
      console.log(params)
      localStorage.setItem('user_data', JSON.stringify(params));
    })
  }

}

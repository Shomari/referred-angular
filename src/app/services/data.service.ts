import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Friend } from '../interfaces/friend.interface'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor( private http: Http ) { }

  public getFriends(): Observable<Friend[]> {
    return this.http.get('http://localhost:3000/friends')
    .map((res: Response) => <Friend[]>res.json())
  }

  public getReferrals(id: number) {
    return this.http.post('http://localhost:3000/referrals', id)
    .map((res: Response) => res.json())
  }

}

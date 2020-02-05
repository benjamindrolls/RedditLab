import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IReddit} from './reddit';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubRedditService {

  baseUrl = "https://www.reddit.com/r/aww/.json?limit=10"
  constructor(private http: HttpClient) { }

  getSubReddits(): Observable<IReddit[]> {
    return this.http.get<IReddit[]>(this.baseUrl);
  }

}

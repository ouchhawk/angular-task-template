import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';
const dataJson = require('../../resources/posts.json');

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "./posts.json"
  
  constructor(private httpClient: HttpClient, private helperService: HelperService) { }
  
  getUsers(): Observable<any[]> {
    console.log(dataJson);
    return this.httpClient.get(this.apiUrl).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}

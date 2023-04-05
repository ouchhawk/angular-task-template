import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';
const dataJson = require('../../resources/comments.json');

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient, private helperService: HelperService) { }

  getComments(): Observable<any[]> {
    console.log(dataJson);
    return this.httpClient.get('../../resources/posts.json').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}

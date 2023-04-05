import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from "@angular/common/http";
import { Post } from '../models/post';
import { map } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient, private helperService: HelperService) { }
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getRawData(): Observable<any> {
    return this.httpClient.get<ListResponseModel<Post>>(this.apiUrl);
  }

  getRoot(): Observable<ListResponseModel<Post>> {
    return this.getRawData().pipe(
      map(response => {
        return JSON.parse(response);
      })
    );
  }
}
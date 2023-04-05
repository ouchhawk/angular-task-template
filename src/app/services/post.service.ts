import { Injectable } from '@angular/core';
import { Post } from '../models/post';
const dataJson = require('../../resources/posts.json');

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  getPosts(): Post[] {
    const posts: Post[] = dataJson;
    return posts;
  }

}
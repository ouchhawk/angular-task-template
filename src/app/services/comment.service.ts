import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
const dataJson = require('../../resources/comments.json');

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  getComments(): Comment[] {
    const comments: Comment[] = dataJson;
    return comments;
  }
}

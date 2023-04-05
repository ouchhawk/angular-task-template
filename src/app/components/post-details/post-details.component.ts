import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})

export class PostDetailsComponent implements OnInit{
  @Input() post: Post;

  userList: User[] = [];
  commentList: Comment[] = [];
  filteredCommentList : Comment[] = []; 

  private commentCount: number;
  
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.getComments();
    this.filteredCommentList = this.filterComments(this.post.id);
  }
  
  getComments() {
    // let commentList: Comment[] = this.commentService.getComments();
  };

  filterComments(id: number){
     let arr = this.commentList.filter(x => id === 1);
     return arr;
  }

}
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';

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
  
  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit(): void {
    this.getComments();
    this.getUsers();
  }
  
  getComments() {
    this.commentList = this.commentService.getComments().filter(comment => comment.id === this.post.id);
  };
  
  getUsers() {
    this.userList = this.userService.getUsers();
  };

  getCommentOwner(userId: number){
    const usr =  this.userList.filter(user => user.id === userId)[0];
    return usr;
  }

  getPostOwner(userId: number = this.post.userId){
    const usr =  this.userList.filter(user => user.id === this.post.userId)[0];
    return usr;
  }

}
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{
  postList: Post[] = []; 
  public pageSize = 8;
  public currentPage =1;

  ngOnInit(): void {
    this.getPosts();
  }
  constructor(private postService: PostService) { }

  getPosts() {
    this.postList = this.postService.getPosts();
    console.log(this.postList);
    
    };

}

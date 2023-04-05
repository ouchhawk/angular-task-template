import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post;

  constructor(private modalService: NgbModal) { }

  onClickShowModal() {
    const modalRef = this.modalService.open(PostComponent, { scrollable: true });
    modalRef.componentInstance.post = this.post;
  }

  changeCurrentPostClass(post: Post) {
    return post === this.post ? " inactive" : "inactive";
  }
}

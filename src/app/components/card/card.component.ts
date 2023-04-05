import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/post';
import { PostDetailsComponent } from '../post-details/post-details.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{

  @Input() post: Post;

  constructor(private modalService: NgbModal) { }
  
  onClickShowModal(post: Post) {
    const modalRef = this.modalService.open(PostDetailsComponent, { scrollable: true });
    modalRef.componentInstance.post = post;
  }

  changeCurrentPostClass(post: Post) {
    return post === this.post ? " inactive" : "";
  }
}

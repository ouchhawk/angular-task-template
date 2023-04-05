import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  @Input() userId: string;
  @Input() id: string;
  @Input() title: string;
  @Input() body: string;
  @Input() imageId: string;

}

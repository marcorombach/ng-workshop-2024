import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RatingInfo } from './ratingInfo.interface';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input()
  id: string = '';

  @Input()
  rating: number = 0;

  @Output()
  updateTriggered: EventEmitter<RatingInfo> = new EventEmitter<RatingInfo>();

  ngOnChanges(){
    console.log('OnChanges');
  }

  updateRating(rating: number){
    let data = {
      id: this.id,
      rating: rating
    }

    this.updateTriggered.emit(data);
  }
}

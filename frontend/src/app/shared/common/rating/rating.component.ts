import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Input() readonly: boolean = false;

  setRating(value: number): void {
    if (this.readonly) return;
    this.rating = value;
  }
}

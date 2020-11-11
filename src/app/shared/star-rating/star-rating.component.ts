import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'pm-star-rating',
    templateUrl: 'star-rating.component.html',
    styleUrls: [
        'star-rating.component.less'
    ]
})
export class StarRatingComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}

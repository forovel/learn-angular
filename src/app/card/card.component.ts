import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: [
        './card.component.css'
    ]
})
export class CardComponent implements OnInit {

    @Input() card: Card;
    @Input() index: number;

    cardDate: Date = new Date();

    constructor() { }

    ngOnInit(): void {
    }

    changeTitle(): void {
        this.card.title = 'Title has been changed';
    }

    inputHandler(value): void {
        this.card.title = value;
    }
}

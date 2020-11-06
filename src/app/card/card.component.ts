import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: [
        './card.component.css'
    ]
})
export class CardComponent implements OnInit {

    title = 'My card title';
    text = 'My sample text';

    imageUrl = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';

    disabled = false;

    constructor() { }

    getInfo(): string {
        return 'This is my info';
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.imageUrl = 'https://cdn.auth0.com/blog/logos/vuejs-logo.png';
            this.disabled = true;
        }, 3000);
    }

}

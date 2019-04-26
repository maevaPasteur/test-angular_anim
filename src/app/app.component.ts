import {Component, OnInit} from '@angular/core';
import {fadeAnimation} from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [fadeAnimation] // register the animation
})
export class AppComponent implements OnInit {
    title = 'my-app';

    constructor() {
    }

    ngOnInit() {
        setTimeout( () => {
            document.querySelector('header').classList.add('visible');
        }, 500);
    }
}

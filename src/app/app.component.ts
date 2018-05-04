/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    name = 'Wall of Targets';
    showDevModule: boolean = environment.showDevModule;

    constructor(
        private appState: AppState
    ) {}

    ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }
}

/**
 * Created by vinay on 9/26/2016.
 */

import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <app-title [subtitle]="subtitle"></app-title>
        <nav>
            <a routerLink="contact" routerLinkActive="active">Contact</a>
            <a routerLink="crisis" routerLinkActive="active">Crisis center</a>
            <a routerLink="heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    subtitle = '(v1)';
}

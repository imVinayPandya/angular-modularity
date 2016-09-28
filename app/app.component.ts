/**
 * Created by vinay on 9/26/2016.
 */

import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <app-title [subtitle]="subtitle"></app-title> 
        <app-contact></app-contact>
    `
})
export class AppComponent {
    subtitle = '(v1)';
}

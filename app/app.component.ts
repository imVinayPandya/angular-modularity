/**
 * Created by vinay on 9/26/2016.
 */

import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<app-title [subtitle]="subtitle"></app-title>'
})
export class AppComponent {
    subtitle = '(v1)';
}

/**
 * Created by vinay on 9/26/2016.
 */

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {HighlightDirective} from "./highlight.directive";
import {TitleComponent} from "./title.component";
import {UserService} from "./user.service";
import {ContactModule} from "./contact/contact.module";

@NgModule({
    imports: [BrowserModule, ContactModule],
    declarations: [
        AppComponent,
        HighlightDirective,
        TitleComponent,
    ],
    bootstrap: [AppComponent],
    providers: [UserService]
})
export class AppModule {
}

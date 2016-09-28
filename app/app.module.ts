/**
 * Created by vinay on 9/26/2016.
 */

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {ContactModule} from "./contact/contact.module";
import {routing} from "./app.routing";
import {CoreModule} from "./core/core.module";

@NgModule({
    imports: [
        BrowserModule,
        ContactModule,
        CoreModule.forRoot({userName: 'Miss Marple'}),
        routing],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

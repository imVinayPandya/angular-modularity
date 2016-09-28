import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { HeroComponent }       from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent }   from './hero-list.component';
import { routing }             from './hero.routing';

@NgModule({
    imports: [ CommonModule, FormsModule, routing ],
    declarations: [
        HeroComponent, HeroDetailComponent, HeroListComponent
    ]
})
export class HeroModule { }
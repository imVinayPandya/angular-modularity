/**
 * Created by vinay on 9/28/2016.
 */

import {Component, Input} from "@angular/core";
import {UserService} from "./user.service";

@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: 'title.component.html'
})
export class TitleComponent {
    @Input() subtitle = '';
    title = 'Angular Module';
    user = ''

    constructor(userService: UserService) {
        this.user = userService.userName;
    }
}
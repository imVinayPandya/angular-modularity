

import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'awesome'
})

export class AwesomePipe implements PipeTransform {

    transform(phrase: string){
        return phrase ? 'Awesome ' + phrase : '';
    }
}